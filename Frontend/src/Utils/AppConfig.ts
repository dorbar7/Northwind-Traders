class AppConfig {
    public registerUrl = "http://localhost:3001/api/auth/register/";
    public loginUrl = "http://localhost:3001/api/auth/login/";
    public productsUrl = "http://localhost:3001/api/products/";
    public forumUrl = "http://localhost:3001/api/forum/";
    public usersUrl = "http://localhost:3001/api/users/";
}

const appConfig = new AppConfig();

export default appConfig;
