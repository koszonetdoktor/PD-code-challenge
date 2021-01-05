# Planday code challenge

The application is using React. It also implements a small server to proxy the request between the UI and Flickr's public API.

## Run in development

Install dependencies with:

```
npm run install-all
```

Run the app in development with:

```
npm run start
```

## Further improvement considerations

-   Able to view single image in higher resolution
-   Better looking grid. It could be without gaps, like Pinterest or Flickr
-   Search bar is not super smart. It won't understand if the user is trying to type tags with delimiters other than space. The search bar could handle more scenarios, like comma.
