<template>
    <html>
  <body>
    Hello! You have found the API page. Here are your instructions to see everything this API does.
    <p></p>
    <p></p>
    To find things in the InvTypes database. the following URl is provided as;
    <p></p>
    /api/InvTypes/i/NUMBER
    <p></p>
    for example
    <p></p>
    <a target="__blank" href="https://skipptekk.com/api/InvTypes/i/2161"> /api/InvTypes/i/2161</a>
    <p></p>
    brings us to the Crucifier. Notice the i in the URL? That means ID
    <p></p>
    <p></p>
    Now to get the Ship directly. It&apos;s very case sensitive!
    <p></p>
    <p></p>
    <a target="__blank" href="https://skipptekk.com/api/InvTypes/s/Crucifier">/api/InvTypes/s/Crucifier</a>
      
      <p></p>
      brings us the Crucifier BUT with the ship name. Basically for new people that don&apos;t know the ID. Notice the s in the URL? That means SHIP.
      <p></p>
    <a target="__blank" href="https://skipptekk.com/api/InvTypes/b/Crucifier">/api/InvTypes/b/Crucifier</a>
      
      <p></p>
      brings us the ingredients to build the ship. But it's NPC 0-0 blueprint info. But numbers don't count. JUST the ship name.
      <p></p>
      PS. 
      <a target="__blank" href="https://skipptekk.com/api/InvTypes"> /api/InvTypes</a>
      is slow as fuck as it needs to load the database. So please be patient with it and don&apos;t bitch about it. 37k+ it has to read and display. Sooo...
      <p></p>
      If you wish to go back, you can <input type="button" value="Get back" onclick="history.back()"> with this button
      <p></p>
      So you wanna have Google Sheets with this? Go a head!
      <p></p>
      <a target="__blank" href="https://raw.githubusercontent.com/bradjasper/ImportJSON/master/ImportJSON.gs"> ImportJSON</a> Copy this into your Scripts and name it ImportJSON
      <p></p> Now for the column just add in '=ImportJSON("https://skipptekk.com/api/InvTypes/allships")' and it will grab all the ships, So far it's 504 lines
    </body>
</html>
</template>