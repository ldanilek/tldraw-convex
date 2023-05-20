<div style="text-align: center; transform: scale(.5);">
  <img src="https://github.com/tldraw/tldraw/raw/main/assets/card-repo.png"/>
</div>

# @tldraw/tldraw-example

An simple example project for `@tldraw/tldraw` with Convex as a backend.

To run this project locally:

1. `rm convex.json`
2. `npm run dev` to create a new Convex project
3. Control-C the `npm run dev` command
4. Create a new Single Page Application at https://auth0.com/
5. In the auth0 application settings page, add http://localhost:5420/ in "Allowed Callback URLs"
6. Run `npx convex auth add` and copy the Domain and Client ID from auth0 application settings.
7. Run `npm run dev` and go to http://localhost:5420/
