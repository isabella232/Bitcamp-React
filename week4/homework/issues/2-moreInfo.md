# More Info Needed

Fantastic work, our users really like the new Sublime addition. However, some users are still confused on how to create placeholder in our app. We spent so much time on trying to get out app to work that we forgot to tell people how to use it!

Your assignment will be to create an `<Info />` component and place it at the bottom of `app__bottom` in `SnippetInput.js`. It should be displayed as seen in the gif.

(INSERT GIF FROM IMAGES/)

`<Info />` will state how to create a placeholder in our app and provide the users with a link the the documentation for the current editor selected. The link the the documentation should change color as well depending on the editor.

Some of our users may be used to using the command key '⌘' instead if they are on a Mac. If this is the case then 'Press ctrl+i' ought be changed to 'Press ⌘+i' if they are on an Apple device. (Hint: You can check the device with `navigator.platform` in JavaScript).

(Additional Hint: use `className="app__info"`to position your component properly. You should only need two JXS tags to complete this `<p>` and `<a>`)