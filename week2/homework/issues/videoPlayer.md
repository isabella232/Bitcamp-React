# Video Player

For this homework you will be making a simple video player where you are able to choose between 4 videos. The links to those videos can be found in this folder under `videos.js` and I have also provided you with a `styles.css` file that you may use. You may change the video links and names if you'd like as well as the CSS file (I am interested in the structure of your React and JavaScript code, not the styles you use). The following GIF shows what you will be making...

<img align="center" src="https://github.com/bitprj/Bitcamp-React/blob/week2/week2/homework/issues/images/videoPlayer.gif" alt="videoPlayer" />

The purpose of this assignment is to get used to passing information from a child to one of its siblings. You will be structuring your code as shown below.

<img align="center" src="https://github.com/bitprj/Bitcamp-React/blob/week2/week2/homework/issues/images/diagram.png" alt="diagram" />
<img align="center" src="https://github.com/bitprj/Bitcamp-React/blob/week2/week2/homework/issues/images/componentLayout.png" alt="componentLayout" />


Your `App.js` file will be the parent of both `Menu.js` and `Video.js`. The `Video.js` file will be a purely presentational component which only displays the video. You can display a video using the `<video />` tag. The Video component should accept the source of the video as a prop. The Menu component should be comprised of a `<form>` with `<input>`s of `type="radio"`. If you choose to use the provided `styles.css` then the only styling you will have to do yourself is to wrap each `<input>` in a `<div className="video-inputs">` .

If you get stuck, please refer to the siblings example I went through during the stream [here](https://codesandbox.io/s/update-sibling-fz9gd) or ask me directly. To get started with this homework you may work with the starter files I set up in this [CodeSandbox](https://codesandbox.io/s/video-player-starter-65mc6) or you may use your preferred code editor and create a react app on your machine and then copy over `videos.js` and `styles.css` into your project folder.
