function smartGarbage(trash, bins) {
  const keys = Object.keys(bins);
  console.log(keys.length);
  for (let i of keys) {
    if( i === trash)
    {
      bins[i]++;
      console.log("hi");
      
    }
    
  }
  return (bins);
}

//smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
console.log(smartGarbage('compost', { waste: 4, recycling: 2, compost: 5 }));