console.log("time to add some firebase code!")

var key1 = {
  nestedKey1: "hi!",
  nestedKey2: "bye!",
}

storeValue("key1", key1)

var key2 = {
  nestedkey1: {nestedkey2: {nestedKey5: {notAsNestedKey: "I'm not as nested!"}}, nestedkey3: {nestedKey4: {reallyNestedKey: "I'm deeply nested!"}}}
}

storeValue("key2", key2)

var key3 = "just me!"

storeValue("key3", key3)

var listKey = {
  listItemKey1: 


    
