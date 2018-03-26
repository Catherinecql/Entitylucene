const apple_ontology = {
    "iPhoto": [], 
    "General Hardware": [], 
    "Newton OS": ["user environment"], 
    "iPhone 6S": [], 
    "iPad Pro": [], 
    "Ancillary operating systems": [], 
    "CEO": ["Former CEOs"], 
    "AirPort": [], 
    "iPhone 8": [], 
    "App Store (iOS)": [], 
    "Hardware and products": ["Macintosh", "iOS Device", "iPod", "MessagePad", "AirPort"], 
    "List of applications": [], 
    "Personnel": ["Founders", "CEO", "Board of directors", "Executives"], 
    "Former executives": [], 
    "Former CEOs": [], 
    "MacBook Family": [], 
    "iPad": [], 
    "iTunes": [], 
    "Digital Audio Access Protocol": [], 
    "Technologies": ["Core Foundation", 
    "Digital Media Access Protocol"], 
    "iPhone 6": [], 
    "Macintosh": ["MacBook Family"], 
    "Software": ["iLife", "iOS", "iTunes", "macOS", "Newton OS", "Classic Mac OS", "Ancillary operating systems"], 
    "iPhone 7": [], 
    "Executives": ["Former executives"], 
    "iLife": ["iPhoto"], "iOS": [], 
    "Founders": [], 
    "MessagePad": [], 
    "iPad Mini": [], 
    "Classic Mac OS": [], 
    "iPod": [], 
    "user environment": [], 
    "iTunes Store": [], 
    "iOS Device": ["iPad", "iPad Mini", "iPad Pro", "iPhone", "iPod Touch"], 
    "Stores and services": ["Apple Store", "App Store (iOS)", "iTunes Store"], 
    "Core Foundation": [], "iPhone": ["iPhone 6", "iPhone 6S", "iPhone 7", "iPhone 8"], 
    "Versions of macOS": [], 
    "Apple Store": [], 
    "iPod Touch": [], 
    "Former board members": [], 
    "Board of directors": ["Former board members"], 
    "owl:Thing": ["General Hardware", "Hardware and products", "Software", "Stores and services", "Technologies", "Personnel"], 
    "macOS": ["Versions of macOS", "List of applications"], 
    "Digital Media Access Protocol": ["Digital Audio Access Protocol"]
 }

const entity_types = Object.keys(apple_ontology);

var suggestions = [];

for( var i = 0; i < entity_types.length; i++ ){
    var temp = {
        label: "#_entity_"+entity_types[i].substr(0).split(' ').join('_').toLowerCase()
    }
    suggestions.push(temp)
}


export default suggestions;
