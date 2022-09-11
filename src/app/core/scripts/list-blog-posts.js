const fs = require('fs');

var blogPostFolderPath = './src/app/pages/blog/blog-content';
var predefinedRoutes = ''
      + '\r\n'
      + 'blog'
      + '\r\n'
      + 'play';
var blogPostRoutes =  predefinedRoutes + '';


fs.readdir(blogPostFolderPath + '', function (err, files) {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }
  files.forEach(function (file, index) {
    try {
      const data = fs.readFileSync(blogPostFolderPath + '/' + file, 'utf8');
      var separateLines = data.split(/\r?\n|\r|\n/g);
      separateLines.forEach((value) => {
        var slug = value.split(': ')
        if(slug[0] == 'slug'){
          if(blogPostRoutes){
            blogPostRoutes = blogPostRoutes +  '\r\n' + 'blog/' +slug[1];
          }
          else{
            blogPostRoutes = 'blog/' +slug[1];
          }
        }
      })
    } catch (err) {
      console.error(err);
    }
  });

  fs.writeFile('./blog-post-routes.txt', blogPostRoutes, { flag: 'r+' }, err => {});
});
