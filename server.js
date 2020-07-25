const {Client, MessageEmbed} = require('discord.js');
const client = new Client();
require('dotenv').config();

const config = {
    token: process.env.TOKEN
};

//Programa el evento ready
client.on('ready', () => {
    console.log(`Logged in as: ${client.user.tag}!`);
    client.user.setStatus("online");
    console.log(client.user.presence.status);
});
//Saluda a los nuevos miembros del Servidor
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'nuevosmiembros');
    if (!channel) return;
    channel.send(`Bienvenido! ${member} Soy el Bot administrador del canal, si necesitas ayuda escribeme un mensaje privado con el comando /iniciar`);
    console.log(channel);

})
client.on('message', async message => {

    if(message.content ===  '/iniciar'){
        const embed = new MessageEmbed()
        .setTitle(`Bienvenido al menu principal`)
        .setColor('GOLD')
        .setDescription(`${message.author}, puedo ayudarte si me envias alguno de estos comandos: \n /afiliacion \n /instagram`)
        .setThumbnail('https://burstcomputers.files.wordpress.com/2020/07/star.png')
        message.channel.send(embed);
    }
    if(message.content ===  '/afiliacion'){
        const embed = new MessageEmbed()
        .setTitle(`Registro de afiliacion`)
        .setColor('BLUE')
        .setDescription('Toca el enlace para ir al formulario de registro')
        .setURL('https://docs.google.com/forms/d/e/1FAIpQLSf_EC9a2I98oexrcF5AMb7rfzIH1nauv50NX5MAcuIMDfudCQ/viewform')
        .setThumbnail('https://burstcomputers.files.wordpress.com/2020/07/form.png')
        message.channel.send(embed);
    }
    if(message.content ===  '/instagram'){
        const embed = new MessageEmbed()
        .setTitle(`Instagram oficial`)
        .setColor('DARK_VIVID_PINK')
        .setDescription('Sigue la cuenta oficial de FEVECO en Instagram')
        .setThumbnail('https://burstcomputers.files.wordpress.com/2020/06/logo-ig.png')
        .setURL('https://www.instagram.com/feveco_oficial')
        .setFooter('@feveco_oficial')
        message.channel.send(embed);
    }
    else if(message.content === 'Programador'){
        message.channel.send('Andrew Clark \n clark1621@gmail.com')
    }
});

client.login(config.token);