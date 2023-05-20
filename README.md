<div style="text-align: center; transform: scale(.5);">
  <img src="https://github.com/tldraw/tldraw/raw/main/assets/card-repo.png"/>
</div>

# @tldraw/tldraw-example

An simple example project for `@tldraw/tldraw` with Convex as a backend.

To run this project locally:

1. `rm convex.json`
2. `npm run dev` to create a new Convex project, then Control-C the command -- we need to initialize auth.
3. Go to https://auth0.com/ and log in or create a free account.
   - Create a new Single Page Application at https://auth0.com/
   - Go to the application settings page for your new auth0 application
   - Add http://localhost:5420/ in "Allowed Callback URLs"
   - Note the Domain and Client ID for the auth0 application
4. Run `npx convex auth add` and copy the Domain and Client ID from auth0 application settings.
5. Run `npm run dev`
6. Go to http://localhost:5420/, log in and start collaborative drawing.
