Ext.application({
    name: "BookLib",
    appFolder: "app",
    autoCreateViewport: true,
    controllers: [
        'BookController','CategoryController','PublisherController'
    ]
});
