# vite-aspet-openapi

This project is an example of how you can configure a react app to be built by Vite, use ASPNET as your backend and generate typescript clients using open api all in one project.

## Details

The app was created with the following steps:

1. Generate a project using `dotnet new react`
2. Delete the folder `ClientApp`
3. Generate a new project in the ClientApp project using `vite`
4. Configure vite to proxy requests to /api to the server during dev mode
5. Configure OpenAPI toolchain to generate Typescript clients on build
6. Use the open api generated clients in the UI
7. Publish to Azure web app using github actions

You can see the running application here:

https://vite-dotnet-openapi.azurewebsites.net/
