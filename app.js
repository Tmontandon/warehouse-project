
const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace',
  trackingNumber: 'acyu845'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]

function filterHeavyPackages() {
  let heavy = packages.filter(p => p.weight >= 4)
  drawPackages(heavy)
}

function filterFragilePackages() {
  let fragile = packages.filter(p => p.isFragile)
  drawPackages(fragile)
}

// function filterExpressPackages() {
//   let express = packages.filter(p => p.priorityLevel == 'express')
//   console.log("yo")
// }

// function filterStandardPackages() {
//   let standard = packages.filter(p => p.priorityLevel == 'standard')
//   console.log("yoy")
// }

function filterPriority(priority) {
  debugger
  console.log(priority);
  let filteredPackages = packages.filter(p => p.priorityLevel == priority)
  console.log(filteredPackages);
}

function filterFreePackages() {

}

function drawPackages(filtered) {
  let packageDisplay = document.getElementById('package-display')
  let template = ''

  filtered.forEach(p => {
    template += `
    <div class="col-md-4 bg-brown d-flex m-1 p-4 m-3 justify-content-center align-items-center"> 
      <div class="text-light text-center bg-secondary m-1 px-1 rounded-2">
        Name:${p.to}
      </div>
      <div class="text-light text-center bg-secondary m-1 px-1 rounded-2">
        ID:${p.trackingNumber}
      </div>
    </div>`
  })

  // @ts-ignore
  packageDisplay.innerHTML = template
}


function drawAll() {
  drawPackages(packages)
}

drawAll()