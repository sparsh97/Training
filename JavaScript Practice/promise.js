const posts=[
    {title: 'Post one', body: 'this is the one'},
    {title: 'Post Two', body: 'this is the two'}
];

function getPost(){
    setTimeout(()=> {
        let output='';
        posts.forEach((post,index)=> {
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML= output;
    }, 1000);
}

 function createPost(post){
        return Promise((resolve , reject)=>{
            setTimeout(()=>{
                posts.push(post);
                const error=false;
                if(!error){
                    resolve();
                }else{
                    reject(' Error: Something went wrong');
                }
               //  callBack();
            },2000);
        });
    //  setTimeout(()=>{
    //      posts.push(post);
    //     //  callBack();
    //  },2000);
 }
 createPost({title: 'Post Three', body:' This is the three'})
    .then(getPost)
    .catch(err=>console.log(err));
//  createPost({title: 'Post Three', body: 'This is post three'},
//  getPost);