// General config:
class AppConfig {
   public salesEmail ="sales@northwind.com"
    public helpPage="http://northwind.com/help"
}

class DevelopmentConfing extends AppConfig {
   public isDevelopment=true
   public isPruduction=false
    public host = "localhost";
    public user = "root";
    public password = "";
    public database = "northwind";
    public port = 3001;
    public frontEndUrl="http://localhost:3000"
}
class ProductionConfing extends AppConfig {
    public isDevelopment=false
    public isPruduction=true
     public host = "";
     public user = "";
     public password = "";
     public database = "";
     public port = 0;
 public frontEndUrl="http://localhost.com";
}
 const appConfig= process.env.NODE_ENV=== "production" ? new ProductionConfing() : new DevelopmentConfing()


export default appConfig;
