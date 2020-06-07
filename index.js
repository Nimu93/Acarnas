const discord = require("discord.js");
const bot = new discord.Client();
const prefix = "*"
bot.login("NzE2NTk2NzAwMzgyNDk0Nzcx.Xt0fGw.t5CzC_HpX3AJ8wrlR-ABHIb9xXU")

bot.on("ready", () =>{
bot.user.setActivity("recruter!", {type:"PLAYING", name:"test"})
console.log("je suis pret")

});




 const embed1 = new discord.MessageEmbed()
    .setTitle("Bonjour vous avez fait une demande de recrutement!")
    .setDescription("Ci-dessous, veuillez faire votre candidature. Pour se faire et pour vous aidez, suivez le plan ci-dessous.")
    .addFields(
        {name:"Premiere question:", value:"►Presentez vous en jeu *(minimum 5 lignes)*:"},
        {name:"Deuxième question:", value:"►Presentez vous en général (présentation personnelle) *(minimum 5 lignes)*"},
        {name:"Troisième question:", value:"►Votre historique de facion:"},
        {name:"Quatrième question:", value:"►Vos richesses:"},
        {name:"Cinquième question:", value:"►Votre nombre de bases:"},
        {name:"Sixième question:", value:"►Etes vous gradés sur Paladium?:"},
        {name:"Septième question:", value:"►Votre temps de connexion hebdomadaire:"},
        {name:"Huitième question:", value:"►Pourquoi notre faction et pas une autre? *(10 lignes minimum)*"},
        {name:"Neuvième question:", value:"►Ce qui vous distingue des autres candidats *(minimum 5 lignes)*:"},
        {name:"Dixième question:", value:"►Que recherchez vous dans une faction? *(minimum 5 lignes)*:"},
        {name:"Onzième question:", value:"►Espace libre:"}
        )
    
        
     

bot.on("message", async message =>{
    if(message.content.startsWith("*recrutement")){
        if(message.author != '716596700382494771'){


    let channel = await message.guild.channels.create('candidature de ' + message.member.user.tag, {
        type: 'text',
        permissionOverwrites:[
        {
            id:message.guild.id,
            deny: ['VIEW_CHANNEL']
        },
        {
            id:message.author.id,
            allow:['VIEW_CHANNEL']
        }
    ]
    });
    (await channel.send(embed1));

    
    channel.setParent("719148133950554132",  {lockPermissions: false})

   
   }}
});

bot.on("message", async message =>{
    if(message.content.startsWith("*juniorrecrutement")){
        if(message.author != '716596700382494771'){


    let channel = await message.guild.channels.create('candidature de ' + message.member.user.tag, {
        type: 'text',
        permissionOverwrites:[
        {
            id:message.guild.id,
            deny: ['VIEW_CHANNEL']
        },
        {
            id:message.author.id,
            allow:['VIEW_CHANNEL']
        }
    ]
    });
    (await channel.send(embed1));

    
    channel.setParent("719148093827973160",  {lockPermissions: false})

    bot.on("messageReactionAdd", (reaction, user) =>{
        if(reaction === '🔒')
        if(user.id === '430632059388690432'){
           channel.delete()
        }else
        message.reply("vous ne pouvez pas faire ça, seul Peurbleue peut le faire.")
        
    })
   
   }}
});
