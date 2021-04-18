let express = require('express');
const router = express.Router();
let validateSession = require('../middleware/validate-session');
const Notes = require('../db').import('../models/notes');

// CREATE NOTES

router.post('/', validateSession, async (req, res) => {
  const { notes } = req.body.notes
  const { userId, podcastId } = req.body
    try {
      const result = await Notes.create({ notes, podcastId, userId })
      res.status(200).json({ message: 'Note created successfully.', result })
    } catch (err) {
      res.status(500).json({ message: 'Note was not created.', error: err })
    }
})

// GET ALL NOTES BY SHOW

router.get('/podcast/:pid', validateSession, async (req, res) => {
  const { pid } = req.params
  try {
      const podcast = await Podcast.findOne({ 
          where: { id: pid },
          include: Notes
      })
      if (notes === null) {
          res.status(404).json({ message: 'Podcast not found.' })
      } else if (podcast.review === null) {
          res.status(404).json({ message: "Podcast has no notes. Try creating one." })
      } else {
          res.status(200).json(podcast)
      }
  } catch (err) {
      res.status(500).json({ message: 'Error retrieving notes.', error: err })
  }
})

// GET NOTES BY USER

router.get('/user/:uid', validateSession, async (req, res) => {
  const { uid } = req.params
  try {
      const user = await User.findOne({ 
          where: { id: uid },
          include: Notes
      })
      if (user === null) {
          res.status(404).json({ message: 'User not found.' })
      } else if (user.reviews.length === 0) {
          res.status(404).json({ message: "User has no notes. Try creating one." })
      } else {
          res.status(200).json(user)
      }
  } catch (err) {
      res.status(500).json({ message: 'Error retrieving notes.', error: err })
  }
})

// UPDATE

router.put('/:id', validateSession, async (req, res) => {
  const { notes } = req.body.notes
  const { id } = req.params
  const update = { notes: notes }

  try {
    const result = await Notes.update(update, { where: { id: id } })
    if (result[0] === 0) {
        res.status(404).json({ message: "No notes found.", result: result })
    } else {
        res.status(200).json({ message: "Note has been updated.", result })
    }
  } catch (err) {
      res.status(500).json({ error: err })
  }
})

// DELETE

router.delete('/:id', validateSession, async (req,res) => {
  const { id } = req.params
  try {
      const result = await Notes.destroy({ where: { id: id } })
      if (result === 1) {
          res.status(200).json({ message: "Note has been removed", result: result })
      } else {
          res.status(404).json({ message: "No note found." })
      }
  } catch (err) {
      res.status(500).json({ err: err })
  }
})

module.exports = router