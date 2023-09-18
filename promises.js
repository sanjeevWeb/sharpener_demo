// Deliverable 

// The boy has deleted everything which he had on facebook.

// Now he logs into linkedin to write some inspiring blogs

// This is the sequence in which it should be executed. Check the last 5 lines

// After breakup the boy logs ino linkedin.
// He calls create1stblog to create his 1st blog
// He calls create2ndblog to create his 2nd blog
// Now he goes mad and he deletes all the blog, till nothing remains.

// We want to print all the post which we have deleted in the following 
// sequence.
// OUTPUT

// BLOG2

// BLOG1

// ERROR:

// const blogs =[];

// //Do not touch these functions below at all
// function create1stBlog() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             blogs.push({title: 'BLOG1'});
//             resolve();
//         }, 3000)
//     }) 
// }

// //Do not touch these functions below at all
// function create2ndBlog() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             blogs.push({title: 'BLOG2'});
//             resolve()
//         }, 2000)
//     }) 
// }


// function deleteBlog(){
//    //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
//    //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
//    return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(blogs.length > 0){
//                 const poppedElement  = blogs.pop();
//                 resolve(poppedElement);
//             } else {
//                 reject("ERROR")
//             }
//         }, 1000)
//     })
// }

// //Call the function in the right way so that we can get the desired output
// create1stBlog()
//   .then(() => create2ndBlog())
//   .then(() => deleteBlog())
//   .then((blog2) => {
//     console.log(blog2.title);
//     return deleteBlog();
//   })
//   .then((blog1) => {
//     console.log(blog1.title);
//     return deleteBlog();
//   })
//   .catch((error) => {
//     console.log(error);
//   });


  const createNdelete = async () => {

    const Blog = [];

    const createBlog = new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG1'});
            resolve();
        }, 3000)
    }) 

    const deleteBlog = new Promise( (resolve, reject) => {
        setTimeout( () => {
            if(blogs.length > 0){
                const poppedElement  = blogs.pop();
                resolve(poppedElement);
            } else {
                reject("ERROR")
            }
        }, 1000)
    }) 

    let cr_blog = await createBlog;
    let del_blog = await deleteBlog;

    

  }