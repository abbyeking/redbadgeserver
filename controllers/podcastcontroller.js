let express = require('express');
const router = express.Router();
let validateSession = require('../middleware/validate-session');
const Podcast = require('../db').import('../models/podcast');

///CREATE
router.post('/create', validateSession, function (req, res) {
    Podcast.create({
        owner: req.user.id,
        name: req.body.name,
        images: req.body.images,
        notes: req.body.notes,
        tier: req.body.tier,
        description: req.body.description,
        publisher: req.body.publisher,
    })
        .then(
            function createSuccess(podcast) {
 
                res.json({
                    podcast: podcast,
                    message: 'Podcast added',
                })
            }
        )
        .catch(err => res.status(500).json({ error: err }))
});

///UPDATE 
router.put('/update/:entryId', validateSession, function (req, res) {  
    const updatePodcastEntry = {
        entry: req.body.entry,
        name: req.body.name,
    };

    const query = { where: { id: req.params.entryId, owner: req.user.id } };
    Podcast.update(updatePodcastEntry, query)
        .then((podcasts) => res.status(200).json(podcasts)) 
        .catch((err) => res.status(500).json({ error: err }))
});

//FIND ALL THE PODCASTS FOR INDIVIDUAL USER
router.get('/', validateSession, (req, res) => {
    let userid = req.user.id
    Podcast.findAll({
        where: {owner: userid}
    })
        .then(podcasts => res.status(200).json(podcasts))
        .catch(err =>res.status(500).json({ error: err }))
});

//DELETE RECIPE ENTRY
router.delete('/delete/:id', validateSession, function (req,res) {
    const query = {where: {id: req.params.id, owner: req.user.id}};
    Podcast.destroy(query)
    .then(() => res.status(200).json({ message: 'Podcast Removed'}))
    .catch((err) => res.status(500).json({error: err}))
});

module.exports = router;
