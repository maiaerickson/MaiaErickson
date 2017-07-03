$('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );

var listThing = [{
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words',
  captionWords: 'more words here'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 2',
  captionWords: 'more words here 2'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 4',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}, {
  imageSrc: 'https://source.unsplash.com/random',
  titleWords: 'Title Words 3',
  captionWords: 'more words here 3'
}];


function initGallery() {
	var el = document.querySelector("#vueImgGallery");
	var gallery = new CBPGridGallery(el);
}

var app = new Vue({
  el: '#vueImgGallery',
  data: {
    message: 'Hello Vue!',
    arrayz: listThing
  },
  mounted: initGallery
})
