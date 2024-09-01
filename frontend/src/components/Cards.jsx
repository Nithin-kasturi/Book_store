function Cards({item}) {

    return ( 
        <>
        <div className="mt-4 my-3 p-3">
       <div className="card glass w-64 h-full hover:scale-105 duration-200">
  <figure>
    <img
      src={item.image}
      alt="car!" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}</h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between flex items-center">
      <p>Price :<span className="pl-2 items-center text-green-400">${item.price}</span> </p>  
      <button className="bg-[#e5981f] text-[#000001] px-3 py-2 rounded-md hover:bg-white hover:text-[#e5981f] duration-300 cursor-pointer">Buy</button>
    </div>
  </div>
</div>
</div>

        </>
     );
}

export default Cards;