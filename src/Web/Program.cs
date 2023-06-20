using Web;

var builder = WebApplication.CreateBuilder(args);

// register services into the container
builder.Services.AddControllers();
builder.Services.AddSwaggerDocument();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

// configure OpenAPI and swagger
app.UseOpenApi();
app.UseSwaggerUi3();

app.MapGet("api/test", () => new { Test = "hello" });
app.MapDefaultControllerRoute();
app.MapFallbackToFile("index.html");;
app.Run();
