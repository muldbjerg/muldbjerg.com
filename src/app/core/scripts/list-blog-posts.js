const fs = require('fs');
// const axios = require('axios');
// const endOfLine = require('os').EOL;
// const newsDataPath = 'http://localhost:4200/assets/news.json';
// const routesFile = './routes.txt';

// const resolve = require.context("./blog-content", true, /\.md$/);

// console.log(resolve);

var blogPostFolderPath = './src/app/pages/blog/blog-content';


var predefinedRoutes = '' + '\r\n'+ 'blog' + '\r\n' + 'play';
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
      // console.log(separateLines);
      separateLines.forEach((value) => {
        var slug = value.split(': ')
        if(slug[0] == 'slug'){
          if(blogPostRoutes){
            blogPostRoutes = blogPostRoutes +  '\r\n' + 'blog/' +slug[1];
          }
          else{
            blogPostRoutes = 'blog/' +slug[1];
          }
          // console.log('blog/' + slug[1]);

        }
      })
    } catch (err) {
      console.error(err);
    }
  });

  fs.writeFile('./blog-post-routes.txt', blogPostRoutes, { flag: 'r+' }, err => {});


  // fs.writeFile('/blog-post-routes.txt', blogPostRoutes, err => {
  //   if (err) {
  //     console.error(err);
  //   }
  //   // file written successfully
  // });

  // console.log(blogPostRoutes);
  // files.forEach(function (file, index) {
  //   fs.readFile('./blog-content/'+file, function(err, file){
  //     console.log(file);
  //   })
  //   console.log(index, file);
  //   // import fm from "file"

  // });
});

// axios.get(newsDataPath).then(res => {
//   const routes = [];
//   res.data.forEach(newsitem => {
//     routes.push('news/' + newsitem.id);
//   });
//   fs.writeFileSync(routesFile, routes.join(endOfLine), 'utf8');
// }).catch(e => console.log(e));


// function importAll(r) {
//   r.keys().forEach((key) => {
//     console.log(key);
//     // const postData: PostModel = r(key);

//     // const route: Route = {
//     //   path: postData.attributes.slug,
//     //   component: PostComponent,
//     //   data: postData,
//     // };

//     // posts.push(route);
//   });
// }

// importAll(
//   (require).context(
//     'frontmatter-markdown-loader!./blog-content/',
//     true,
//     /^\.\/.+\.md$/
//   )
// );
