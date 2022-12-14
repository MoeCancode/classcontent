const router = require('express').Router();
const {
  getVideos,
  getSingleVideo,
  createVideo,
  updateVideo,
  deleteVideo,
  addVideoResponse,
  removeVideoResponse,
} = require('../../controllers/videoController');

// /api/videos
// http://localhost:3001/api/videos/
// {
//   "userId": "???",
//   "published": true,
//   "advertiserFriendly": false,
//   "description": "CRUD methods in Mongoose",
// }

router.route('/').get(getVideos).post(createVideo);

// /api/videos/:videoId
router
  .route('/:videoId')
  .get(getSingleVideo)
  .put(updateVideo)
  .delete(deleteVideo);


// /api/videos/:videoId/responses
router.route('/:videoId/responses').post(addVideoResponse);

// /api/videos/:videoId/responses/:responseId
router.route('/:videoId/responses/:responseId').delete(removeVideoResponse);

module.exports = router;
