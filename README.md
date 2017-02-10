> # Kentico Cloud React Starter

## Whut?
A very simple boilerplate to render data from Kentico Cloud to both the server and the client, using React components

~~*Note: Currently, this is client-side only! The next step would be to SSR this baby, which is totally do-able using this environment. I just don't have time right now to sort it. Feel free to chip in if you do*~~

We're now rendering server-side first :) 

## How to run
- Install latest node
- Pull the repo
- `npm i`
- `npm start`
- Head to localhost:8080

## How to configure
- Head to https://kenticocloud.com
- Sign up for a free trial
- Once you're set up, and logged into your Kentico Cloud site, click the Kentico logo in the top left hand corner and click "Development"
- Copy the "Project ID"
- Replace the Project ID in `src/config/default.json` with yours:
```js
{
	"projectId": "your-project-id-here",
	"previewAPIKey": "your-preview-api-key-here"
}
```

You should now see some data on localhost:3000. If you don't, here is what might have happened:

- You pasted the Project ID wrong
- Kentico have changed their base project and the fields have changed. Try inspecting the data
- React doesn't like a field. Check the console.
- Slack me `@js`, or [open an issue](https://github.com/MMTDigital/kentico-cloud-universal-react/issues)

## TODO:

- ~~Render the content on the server, first~~
- ~~Look into the various content-specific endpoints Kentico provides~~
- Look at hooking up a view model/an action -> store configuration, for easier data management
- ~~Add nodemon~~

## Resources

- http://docs.kenticodraft.apiary.io
- http://docs.kenticodeliver.apiary.io
- https://kenticocloud.com
