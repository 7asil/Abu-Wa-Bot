const _0x4a5e2a=_0x5a5d;(function(_0x2ddf05,_0x5b51f9){const _0x25ffa8=_0x5a5d,_0x103a5b=_0x2ddf05();while(!![]){try{const _0x1cd4f8=-parseInt(_0x25ffa8(0xf8))/0x1*(parseInt(_0x25ffa8(0x101))/0x2)+parseInt(_0x25ffa8(0xf4))/0x3+-parseInt(_0x25ffa8(0xf3))/0x4*(parseInt(_0x25ffa8(0x10d))/0x5)+-parseInt(_0x25ffa8(0x10a))/0x6+parseInt(_0x25ffa8(0xfc))/0x7+parseInt(_0x25ffa8(0x113))/0x8+parseInt(_0x25ffa8(0x10f))/0x9;if(_0x1cd4f8===_0x5b51f9)break;else _0x103a5b['push'](_0x103a5b['shift']());}catch(_0x1a9250){_0x103a5b['push'](_0x103a5b['shift']());}}}(_0x2574,0xd3f64));const {MODE,IMGBB_KEY}=require(_0x4a5e2a(0xf0));async function webpUpload(_0xb03820){return new Promise(async _0x279be9=>{const _0x5ebfa3=_0x5a5d,_0x11c5fe=require(_0x5ebfa3(0xf7));for(let _0x350e40 of IMGBB_KEY){const _0x4245c0={'apiKey':_0x350e40,'imagePath':_0xb03820};var _0x2faddc=await _0x11c5fe(_0x4245c0);if(_0x2faddc['url'])return _0x279be9(_0x2faddc[_0x5ebfa3(0xf2)]);}});}function _0x5a5d(_0x286e35,_0x2d61f4){const _0x257475=_0x2574();return _0x5a5d=function(_0x5a5d6a,_0x2532cb){_0x5a5d6a=_0x5a5d6a-0xf0;let _0xe34746=_0x257475[_0x5a5d6a];return _0xe34746;},_0x5a5d(_0x286e35,_0x2d61f4);}const {bot}=require(_0x4a5e2a(0x104)),ffmpeg=require(_0x4a5e2a(0x102)),{upload}=require('abu-bot');function _0x2574(){const _0x47e55d=['url','323020kpaLPT','4539081dfsVUO','url\x20?(.*)','image','imgbb-uploader','65599SrMwSK','video','link','end','11233558qCANSB','client','sendMessage','audio','sendReply','52MgGtik','fluent-ffmpeg','output.mp4','../utils','-map','quoted','save','jid','utility','5588676nIFywB','sticker','reply_message','100GqYiiG','-map\x200:a','15376842UgCaDc','Uploads\x20image\x20to\x20imgur.com','[vid]','download','2351656lTdzUy','_Failed\x20to\x20upload\x20file!_','*_Reply\x20to\x20image|video|audio|sticker_*','_ᴍᴀᴋɪɴɢ..ᴛᴏ..ᴜʀʟ..._','../config','_Audio\x20too\x20large.\x20Try\x20below\x2090\x20seconds!_'];_0x2574=function(){return _0x47e55d;};return _0x2574();}bot({'pattern':_0x4a5e2a(0xf5),'fromMe':!![],'use':_0x4a5e2a(0x109),'desc':_0x4a5e2a(0x110)},async _0x159364=>{const _0x3ff51b=_0x4a5e2a;if(_0x159364[_0x3ff51b(0x10c)][_0x3ff51b(0x10b)])return await _0x159364[_0x3ff51b(0xfd)][_0x3ff51b(0xfe)](_0x159364[_0x3ff51b(0x108)],{'text':'_'+await webpUpload(await _0x159364[_0x3ff51b(0x10c)][_0x3ff51b(0x112)]())+'_'},{'quoted':_0x159364[_0x3ff51b(0x106)]});else{if(_0x159364[_0x3ff51b(0x10c)][_0x3ff51b(0xff)]){if(_0x159364['reply_message']['duration']>0x5a)return await _0x159364[_0x3ff51b(0xfd)][_0x3ff51b(0xfe)](_0x159364[_0x3ff51b(0x108)],{'text':_0x3ff51b(0xf1)},{'quoted':_0x159364[_0x3ff51b(0x106)]});var _0x149292=await _0x159364[_0x3ff51b(0x10c)][_0x3ff51b(0x112)]();await _0x159364[_0x3ff51b(0x100)](_0x3ff51b(0x116)),ffmpeg(_0x149292)['outputOptions'](['-y','-filter_complex','[0:a]showvolume=f=1:b=4:w=720:h=68,format=yuv420p[vid]',_0x3ff51b(0x105),_0x3ff51b(0x111),_0x3ff51b(0x10e)])[_0x3ff51b(0x107)](_0x3ff51b(0x103))['on'](_0x3ff51b(0xfb),async()=>{const _0x322475=_0x3ff51b;try{var _0x118fa9=await upload(_0x322475(0x103));}catch{return await _0x159364[_0x322475(0xfd)]['sendMessage'](_0x159364[_0x322475(0x108)],{'text':_0x322475(0x114)},{'quoted':_0x159364[_0x322475(0x106)]});}return await _0x159364[_0x322475(0xfd)][_0x322475(0xfe)](_0x159364[_0x322475(0x108)],{'text':'_'+_0x118fa9['link']+'_'},{'quoted':_0x159364[_0x322475(0x106)]});});}else{if(_0x159364[_0x3ff51b(0x10c)][_0x3ff51b(0xf6)]||_0x159364[_0x3ff51b(0x10c)][_0x3ff51b(0xf9)])try{await _0x159364[_0x3ff51b(0xfd)]['sendMessage'](_0x159364[_0x3ff51b(0x108)],{'text':'_'+(await upload(await _0x159364['reply_message'][_0x3ff51b(0x112)]()))[_0x3ff51b(0xfa)]+'_'},{'quoted':_0x159364[_0x3ff51b(0x106)]});}catch{return await _0x159364[_0x3ff51b(0xfd)][_0x3ff51b(0xfe)](_0x159364[_0x3ff51b(0x108)],{'text':_0x3ff51b(0x114)},{'quoted':_0x159364[_0x3ff51b(0x106)]});}else return await _0x159364['sendReply'](_0x3ff51b(0x115));}}});
