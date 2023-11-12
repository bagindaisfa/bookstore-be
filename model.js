const mongoose = require("mongoose");

const volumeInfoSchema = new mongoose.Schema({
  title: String,
  publishedDate: Date,
  description: String,
  readingModes: {
    text: Boolean,
    image: Boolean,
  },
  pageCount: Number,
  printType: String,
  averageRating: Number,
  ratingsCount: Number,
  maturityRating: String,
  allowAnonLogging: Boolean,
  authors: Array,
  contentVersion: String,
  imageLinks: {
    smallThumbnail: String,
    thumbnail: String,
  },
  language: String,
  previewLink: String,
  infoLink: String,
  canonicalVolumeLink: String,
});

// Define the main schema for the MongoDB model
const bookSchema = new mongoose.Schema({
  kind: String,
  id: String,
  etag: String,
  selfLink: String,
  volumeInfo: volumeInfoSchema, // Embed volumeInfo schema
  saleInfo: {
    country: String,
    saleability: String,
    isEbook: Boolean,
  },
  accessInfo: {
    country: String,
    viewability: String,
    embeddable: Boolean,
    publicDomain: Boolean,
    textToSpeechPermission: String,
    epub: {
      isAvailable: Boolean,
    },
    pdf: {
      isAvailable: Boolean,
    },
    webReaderLink: String,
    accessViewStatus: String,
    quoteSharingAllowed: Boolean,
  },
  searchInfo: {
    textSnippet: String,
  },
});

// Create the Book model
const Item = mongoose.model("Book", bookSchema);

module.exports = Item;
