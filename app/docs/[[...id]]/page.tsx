const DocsIDPage = ({ params }: { params: { id: string } }) => {
    
  console.log(params);
  
return (
  <div>
    <h1>Docs ID Page</h1>
    <p>Document ID: {params.id}</p>
  </div>
);
}   

export default DocsIDPage;
