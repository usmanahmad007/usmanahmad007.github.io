'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3ecc66f20d7a70a9a01e8008dc01a29d",
"version.json": "b6a3e74db067812ddc510932de292e4d",
"index.html": "670cb3b124a5f20909982b7921f30044",
"/": "670cb3b124a5f20909982b7921f30044",
"main.dart.js": "249ec1cffcae97cbea6174b1a301bedf",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "df34dda56bd735e016fd22a0ef594921",
".git/config": "3742c1c17c2d5ddc973d6653cb25e9f6",
".git/objects/61/6b15c775b84945c947162bf0b0577e0c94c9c1": "5eeb3df87517a7a15cdf1cd61a8ab0c8",
".git/objects/61/05dfcfec78ca477a43c0f83628a14ae3d2f48b": "9da9d83479962ee308aa33bb3eafe664",
".git/objects/0d/f5f84a0c8427054b7c5a704f5610fa6074f7d6": "6b0b2a2954d0a0dd67ddef1bf1277d34",
".git/objects/95/1e47836d8f87220d8eacad2368d0f12a5b6dd0": "a142f54458757f0f7920282fcf71c620",
".git/objects/59/927bc8b599a087693bd72f2cb9229ea391a9f0": "fec3ee66c0bf06ddc0ef82edbcd45378",
".git/objects/92/04cfc79ac2c8c9a09e85e29a6300336f2ddc6b": "5cd52ac8beab475b21e3de084f59e84f",
".git/objects/92/77560b415c48b6e4627ec55cb6be47b7637421": "4828b70562451e7d841ac9499f54712f",
".git/objects/0c/f837290d7d3bef713f182387c4e3bb36e066e6": "a0e5cd38794e73041e74630546a3b8d2",
".git/objects/3e/011f710e70112d9f7ebea612f1f3f21b33b8b4": "21f4d193dfb791065c23024816c3171b",
".git/objects/50/f715545948beafe44b21fa3ec13472a8f202fa": "3b5e385539d094192770beaa0dbf7d3e",
".git/objects/68/b7b66010f1d65561ff3cbf42b59890ee38ba37": "ad70c5e26651446f0440e2a07c69ccf3",
".git/objects/68/b2b7be13c8a7be928b982d70533c83a2f1d9bb": "d0c98a2b30f550d6197864045cb33efb",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/68/6ef6f3727ee31e8c2faba16ea453879060cadc": "73f29799df6b0d7a34c14e3946ca828c",
".git/objects/57/16eedb5fb50d96a6f9bc202462d69054d57eb2": "b2d1ff75001934f8ad8f7253a5d0c5ab",
".git/objects/57/dc0da6c6b62b745e3bc4e8087a4b383ae96678": "9dd1c0ccb0a145e02a1e4557f94387ac",
".git/objects/3b/be42670fd1a4fb62a9e7ea331866443e2b28c3": "cb14e593e39e28a34819bcbb9f5b5dc9",
".git/objects/3b/606ce02aba29435d6e3b02a457b89445ff23a8": "92bcaf1ae25d24b091ec8b8730b0bca4",
".git/objects/03/b3915d2959f4e270e7c9aec1bd5e0d35f50646": "155b8379dc248d50c610e1023e9c2df8",
".git/objects/6a/94ac6c7f6a96e15253fbbfa49a8eed1ee519e1": "9ca8533d7a390e95a387a086bca4eb23",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/38d3038b80e48465e2da07e2ea177bdda9fc4c": "1674111a7d0ce0a83a7803ed7be21f6e",
".git/objects/32/d23814b070c1a5a4373b5768bdf25ebd643377": "8ee738d23e4d61a25b3268a3f182c7e5",
".git/objects/35/654f4700f54af5deb2971e105b7b78857421cb": "2580399ba517aa337d7569e2a1ce3e07",
".git/objects/35/9c4c7878680098fe1c8e46e2ee7c07ff8fdcbc": "ce5646b7c690b3ffa7b29e58eb202ae8",
".git/objects/69/0856e07bf87d16e0c0d176f89b47ceb2e887ba": "1a86d84e71a8ded78ba8855c8e17b9d1",
".git/objects/69/bf6137f5ae42e1a0a859d75c6c166066187df8": "05c83ac00e502a480b61c0027bed7d8b",
".git/objects/3c/dd701a3e20102d952bfae10fd3b40d8c7a9365": "42add7efa722534888e0953a5baca7ca",
".git/objects/3c/d57348963dec6bcca965da116354555b2d96fe": "d174dc3197a9ae37a93d858401cedc05",
".git/objects/3c/37f7761c4df1e1ee1721e0ae0236790059e17d": "cacf7a50ffe76e21196bbc42d6c82e66",
".git/objects/56/c5a4b80bc29418d66c9730d1097185175bea2f": "64c781c2fc254bc48aadfb841f0a8527",
".git/objects/51/9f53be4ba7e276081c088a0825e555f4e31d68": "ffa82d757aff5af70014e39027aff1c7",
".git/objects/51/55cf731cd403bcb3ad64cff65373da0b27ae0c": "c70d272c6605e575d7f3a2e2b9794a5a",
".git/objects/58/7b704d6864e545fc5381518279ad5807bbcdf3": "cc8312d546458293cc10eade20f5540d",
".git/objects/58/5d558e9fd994e991ded8553cd9f2eb28348d60": "a54ab1aa75fae162837fafb79758c84b",
".git/objects/67/b8d2e688fcdfe61822e76c02a79496960c6a32": "816222b8579817c1162bc9b6d1fb574f",
".git/objects/0b/6759d2d3d41173793b478fb502cd4d02281917": "50231682dd70f2fb589955516fa05b33",
".git/objects/0b/602d14c4ebfcbc4e0c60e49b8765333b8282e1": "6817ac069f1369f22df490eeadd69d5f",
".git/objects/0e/f8a8d363ded3b48840d25d30f3743c0d518403": "a5e9271ef9aee4b83427ae6d62a63665",
".git/objects/0e/bc32e698ce61d48eee72994322e0542268c9a4": "b075029add5d3349410e9474aa48d292",
".git/objects/0e/f84ef07b3c496023775982c9c2cd5e3c8d8be4": "454235254631580abed04c9f6ab2069a",
".git/objects/60/e3004eccab6265c09d100bf52e2850d26a692f": "ba0295b5ca845650bf03cb4eced81c0c",
".git/objects/34/db7e3a5385dfbf67db5d723ee83ac0962cdf5e": "d0eb69a034a793246c1a8fafd96b26dc",
".git/objects/34/51be69826e78e645b8b750817e5a86c4ca466e": "1d0a873494da0e261b9e536145eb2b4a",
".git/objects/5a/e26c2b4fffdacbab918a04760019569e607b26": "ae65deba0f2636edf1802dfac70b1622",
".git/objects/5a/858f150264a46c113d1d836b9863e1d285fac9": "f57762c2fc5e874a1a283ad0981b729e",
".git/objects/5f/145aac15b5e6dcf741f902d258d185b4941976": "32fcc4ff8a8b88ac37391efadd971f5e",
".git/objects/05/baaa2d23fffedea2ad581f7912d2c3882ebdde": "b572a0ee7055ec2161623b67b64ddb15",
".git/objects/05/8bf2d962a44b5815c974f1c50085bb07917666": "e1febcc6e863a6b4160fd2c9984eef99",
".git/objects/02/0d1b0adb11cff585ee345832b3faaf563351d2": "f4fdfa373fec4289958b0ea5fed7cba1",
".git/objects/02/cb8c69606029a07f6219bc3d199194d239d980": "7628e460f80d0b38cd11780718729869",
".git/objects/02/3a767617dd12e88206351e94de87acd6696f94": "f53bb5e85d1298648d92eb7387edf2b9",
".git/objects/a4/85cfe88ff615514134e08513702a2612207567": "501f818ef7666fb6423760b593907acc",
".git/objects/a3/03863b85f5e9fe8ca384b312e45e3595f73b3e": "4d54de2e6d66d7bf755d55952a3f866e",
".git/objects/a3/d0d77150e47bebe0eaf720a2edf1b1948fb6a2": "aca1f1fedcdaf5f533a6c97bd10df994",
".git/objects/b5/42ab9a30229e898e3122de6b568e774dab0a5f": "ce3e97414043c2b3639330cde708586d",
".git/objects/d9/9e32bfe19f248b1334178ff0865a6d4ea7adca": "559e45bec396a8832565ee75978d90cf",
".git/objects/ac/c8eb899e10b07264fba58d33667d9e120d0b7e": "33c8672b5dab76edd20e39d3bb15b16c",
".git/objects/ad/4e916f8a6b210d168b134b8cd8786057c9786d": "8a36e6625d1a062f5486de4ababc2d81",
".git/objects/d7/5b0e967133eb894ac948168f3bf477922be6cc": "9a04c88e3b63e4f7a650d8bfceb6fc43",
".git/objects/d7/109ec595d90412141815e8480c90490e2c68fc": "2521596ac4dd4494d6332010bdf0b010",
".git/objects/d7/4422a9a05ded25808aaca4ed13f4426b9016ff": "fc2d6b0879c14a208a908f1e1202d0f5",
".git/objects/d0/f5e95bc8c533b0ccf9d21da39a0556da7837b8": "fee998e7e602f29156eb13d47da55f58",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/373535f15694be3926b4c8b6db3cee308f5bae": "0c1001c55d66a80b170569cad62191aa",
".git/objects/b3/bcf61ef392a160dcb4e30052bb68e6627d04bd": "3cf03db5e219ae2f3f43e78ab01ae2ec",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/7136e7b943c67f694e16287d3010b74e9e03b6": "f9b694b0a5becfa6ea956edd02f925b9",
".git/objects/b4/5556a0efab7431472b09de4cf18a3e08292c26": "42e7c258c620d0d2835f050333d25cd4",
".git/objects/bd/28b662c99c4825b8a187d252b51897bea69aa8": "322f13101aadb11e5f85a61e6f4ce899",
".git/objects/bd/b91ebdb90c6550577b7689be5107685d708d34": "f3956a7742f001b3fd99ed4e76a01840",
".git/objects/d1/f57abbbd16576b08f8a8b8e9dcee8eb11c36ef": "ebe861688b25b00ca0c9393ef1a334ea",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/8a24fbd989f47697148e7bc05bb2e7e5f1bdb4": "77a1416dcf85052cbb6e6aba9c1b1f70",
".git/objects/bc/455e9c5d2cd1fdfa84514860f8725698e7c10a": "6843d114bc75bc93a1028fa4e130f269",
".git/objects/bc/6ca3fca38d7f353f8250c3264412d1f902167b": "25093dc71ad80ba69a3f44399e71c732",
".git/objects/ae/6f63cc45ffa1573cb0f476efdfd9534af1ffbf": "e7ac60907e45495bfb6121a28b93e548",
".git/objects/d8/bf63707ddd70705d3a4e913fd74977f68b2321": "f2898067e83edfc6bc83708bb3f6b497",
".git/objects/d8/1d26e8e08ce45aac1867d7fd35daf642eedfda": "51e01cd8b82d31dffdef7526335f2792",
".git/objects/ab/250e827af98625fa86c8964c4239c5ad3f02ff": "055d2ee00bb086eef0a21f8b2c1210b6",
".git/objects/e2/735b705e2b86bb25ff07e5127997d368989a13": "3519a99b35471de2bbb4d62c2e935bef",
".git/objects/e2/61d11f465a46d33797d83bdeb73b6c44b050aa": "6455478aa3cc188d5f1457c0cfd86c54",
".git/objects/f4/3648f76ac93fc610f33ef7ad653c9d6ab6081b": "96dd29b41e6cb26acbd9d28739e928a1",
".git/objects/f3/c917f8a5372a35752286053867c7d37aaa4d42": "d54abeb401a6c8feb0acfe1a40653aba",
".git/objects/f3/d8fe14005626b655d07f90bfa1d4622b8bc59d": "0036b3a6d714a88edf65babda956bf43",
".git/objects/f3/5f3041176cba004d08f364da77c2ed899547f5": "eeb23774521a5b5b7d35d3b67245aa51",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/943cce70e3f929d5e76f04a0c6a238e1554618": "b32be4ccaaec2c1fffdcac8ac7be3c4e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/7de55ea8c67a15fd67b0c9ecc10f26fab7915b": "d31c6838581892645119136a3b0cd6a3",
".git/objects/f2/d79ba3c854180614f0bd2f9afbc86217d0e38e": "b2c52902697c54efb6023598d72bea78",
".git/objects/f2/ca75c1c6b40ab76b4b8c51f7f2b49c65b69aeb": "7d231e1a31fbf5505ed23377847aeaa9",
".git/objects/f5/19e8d68e6f09228fa12836b965dfb4c807834d": "2b784c58f9510fa29cee7a297b255223",
".git/objects/e3/a5bb3ced99a59d71f27a46ce6b58860feab40a": "034f72ae01b1d787467b2d48058405af",
".git/objects/cf/a694dcc2da53f06d0bf42be341ec5c09de099c": "e182b2244ef176b332ba0a5a6b430b6c",
".git/objects/cf/cfadeb6608b4f20b0bd4e836ca27e52c1bd90e": "e32a61d01defc2814befc6377d9f9a9c",
".git/objects/ca/0849be84ca32c06c109587b640aba702e499d8": "47b8e231561be5a302fb44a38eeffda0",
".git/objects/e4/4d6b920c2dbd38bae0600cdfe84b8f58992963": "e47c34cbbc44df93631d1098f11197bd",
".git/objects/fe/718a97c3eef6e490f99a0801cb8c5873c086cb": "b8cd7c176a199805323b5d7b8e05563a",
".git/objects/c8/87c60aaefc521e676b4cb3d063d8bfd6a87b26": "bd244311d5ea40f970e8374b95048ed9",
".git/objects/c6/d7aed3b2e3fd495360b80ed829fbf07474762c": "39b5c5c1480612c4257df509a80e6bc9",
".git/objects/c6/408e53cfa40edd9b36ec962fc5d74b4e518f32": "9ee3b94296dd22a60972dac461da07ca",
".git/objects/c6/d99aa5c944b4f59df87b84b2f61d14127522cc": "9da061280ab122a861f3e6bbfc6cfda1",
".git/objects/ec/35c7b5f55455932642549f8ab73933af154309": "325e8d5065567b021097a69dbc054e7b",
".git/objects/ec/b673744cfd6e00d3cc015f3f3f4ad2349dc125": "73b4b41a2d120620547c57d44d77681b",
".git/objects/ec/f03c61f25b3acc5cf84d4965ea8216257b1d42": "21273cfb3e12d88d836397a95914d095",
".git/objects/ec/7aff03d2639e83a61d6b498943322ca837bbee": "33688fcea8ddbcf8fd6f2b4b5c522720",
".git/objects/ec/afb3942e8943c68942ed6aa1fa6d96c3d83002": "4c98da233862fe242c3f3dc0ace2fbc6",
".git/objects/ec/54501f02bc76d2f09b316efb899f737929b9ce": "99bf890f393c50625cc6c2904a30e466",
".git/objects/4e/eb89253e38b03299a3f53ae7aeeed863a02256": "012fb39cf3428db6017c1fb26673766c",
".git/objects/20/06f4c5ac62ee80631fe394036f49555ff340c9": "d0495f7f1a3a0b3d2e0102e04e26ea1a",
".git/objects/20/c826a9925f82bc35b02fd9d5ddf854e2ded8fc": "4630af13ce634ff6c5334d90594ea4ef",
".git/objects/20/0a367d482ce7755d1458c700e61c9cd820618f": "2895d64c58ef66547bc2e4152b50773f",
".git/objects/18/c32aada52687e7215d80bb2529ba353df49264": "59f67f67a5d3338517e2dd6a9e5aa8b3",
".git/objects/18/00091013bba491972f7a13761982ba5962ee99": "d3ecafd0215a02bc0d58ce69674a7f80",
".git/objects/27/95b34ecaf2bc4336fd8a186e5fe5d7b54f15fc": "db3eff805c15d9b8b9db474e381565b3",
".git/objects/4b/41b379890863c4e7a74f248a10fa71a8ac9194": "c1116b53396915f755f08cae0f3bebbe",
".git/objects/4b/1c1d4acefa49881f7f7e16c745bb0b4b173e13": "fb2538d037cf8b8a79944b7f3a98cf21",
".git/objects/7d/91b0fc37a0d367336a03ae32088d064e58d784": "088af348153c0efd37ca0fdb02be82ce",
".git/objects/7d/4323945027b886d478f960a6cf0cd78e619d72": "9eea8c9fb12dbd8db064c49b312283fb",
".git/objects/7d/9a1607822cbe1d44bb0319bb218f9de5eaa558": "ffafea74ba434a3764a54aef5d34e01d",
".git/objects/7c/0164616c3dea929c018b93c86606c29d9d959f": "fd692dd9881d7ed2244218b36abc2b11",
".git/objects/1f/84565bff391617f01f85f9e845ddffeee54241": "963a6f95c5a3e75a3c7e9ec5cae6ab13",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/629f4d935dfdfd0a994b659a15ea2baeb35ec0": "b126acb645d1e3401df4223eb4cea949",
".git/objects/73/f297e5c232c69ab8fe1e548088b9c82a1560b9": "42527699f4f719aa5f0bada89594eec2",
".git/objects/87/51bad7f861840e7c014e2bef64b1988b1f3b5f": "89bdc00a1b9947d3056ca621c28a309d",
".git/objects/87/ca5cd287a433634799b5fa73614b8d20e5e5c6": "082bcb56c9ead527484c782fc8f32c18",
".git/objects/80/44e7d69de655a88075e3ea287fed1e8ee7f0f6": "b6f454bbed8b6ff57e1764771d08cbd7",
".git/objects/80/3d52454ad4bc05b1ccb1a8b80d009fdae86380": "9e8bba5c067a21ad0b63def1f6c3a056",
".git/objects/80/a9a0d631aae9c84030b8eda38efb08d11a78ce": "e6bc3fa7d09779f3cf750a05e28c664b",
".git/objects/74/10e906ac4ed88b6085362451e14f751e50390a": "24ee2037318afe641647597357d1d0e3",
".git/objects/74/f3769d01d535cfd63e00653004162dc290ad1d": "78eb20ff90832c7e8768f76f27f5cff9",
".git/objects/28/9cf9039cb85a43bae5b956b6584902735292be": "1f39037503612e0059640a1893704b03",
".git/objects/28/09da068b041a17ede9cb23ed30a8e439f6f722": "901db166efd6d501dde383e73b0fbc47",
".git/objects/17/3592a0bd84eb9c5161237cf949340b9f22e1a7": "164b5814ae250fad2d2971094dfe5957",
".git/objects/8f/58553843a566298a3050c0589d684939ca2bbe": "e17b6b5c45e8c4843e1a0f09f0c5b54e",
".git/objects/8f/c0ac9b628b1f075ba7f6b085cda72b27f94ce8": "d7d142a474947046d8a865876509909e",
".git/objects/8f/0531a044b8cf60a9416d055c365f15657797e6": "e412bb3959eb805d3e032d4d104fda65",
".git/objects/8f/919c6891fa7c4ca0d456f0d06385ed87d86f0a": "24560ed8c58ce51b950aa5106f24b770",
".git/objects/8f/9d697c6b414fc1240761fb2378ce193bdbb58a": "ac6334dae73b0b2c9a07a7f73fe402f8",
".git/objects/8a/5de4da5c8dd4d0cc99d5b7f54a88d2415c3b06": "31c9edfbcb9be3162b8ac05d6e7959c0",
".git/objects/8a/d3f56d6b8683aaf190e5e73823062deec0b01f": "9d71411604e9f16276427a10dcaddd56",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/1e9718c52f8e9a68c1f618a84db8ebce0be506": "03863be3b1b19c800aa93a89463ea5d8",
".git/objects/7e/152a1c59d24d870637a58327dae87f6f072d99": "f019b6c00032de8acc6829624088690d",
".git/objects/7e/e7e8c44b297d5e5312e08efc3b844be010d0ee": "8a4b7ca64991353511b5c63d86253f7e",
".git/objects/19/6b9ad6a9920c55a6ed2636a091a5ce3aa6fbcd": "73f7cc8bba9a0e3dcadcab232864f016",
".git/objects/19/7ca6ffface69af5d95d76fc06a114e20a323cd": "89d48c66b9623531673a661dba69bb01",
".git/objects/26/2858b8acd65c0fff00ba908fce7bfcef19f8d5": "57dcd35663ec1bfca2d31ca807f2e4af",
".git/objects/21/4261be10707238890d5826c8219e22b29d361a": "ac485de6b2f836d2e80bf384518bcdd4",
".git/objects/21/6717d4773f177a2d2742e0c3ae2de783c9e2b2": "e970e6e3181d5f657d916395ac25b1ca",
".git/objects/4d/aed88b314ee87d353eaa7d4af132d5c6815997": "bbd1b9104772a0b064dc9a194d3ade9b",
".git/objects/4d/2af014f903713f938178b84c4d9c1f12343cc0": "199049f5e1778f4d5112b96cdae0af6d",
".git/objects/81/d2bcdd90a5e1f2817cb97ef91d9723b4b20bdd": "924d1163bb8f46db044f05eae26e18f0",
".git/objects/81/47b393a9a127097280bf2965016083069a351c": "f2cfcf938368c2fa315f34de41fc2858",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/143e2b1b80e710e02174de515f63e6759826fd": "eeba81ac8829c12050a39db08ee7ea31",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/28af82fc13d644607ed6189244e4b7d9cb81a2": "fd26da8071b96d0a89c92114846d38a2",
".git/objects/6b/d92d13639226655b2b279046f95bf324193213": "f67405ec6cef7b99c09ffb8c40b1baf1",
".git/objects/6b/656859dd63e51ff3f946e9722e0c1b0d9d16c5": "d865783480ad8530bc6561a3534947fa",
".git/objects/6b/fadf5a7dbdd253d3c8ed9b4adb19f6130c14fd": "82dfac0dc12e9be13ca07e6e8108e784",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/1f93958431fb204e485bc6c727070118f4eea3": "3cf35d7c703036b03fde71131e0f6c89",
".git/objects/38/8f09290b27b75e5485478ccf05c419da1dc3df": "27ec793059e248456f2e1df7ba65d054",
".git/objects/38/89e7f939e4ad1ecce8720f91d4b5956945c1ec": "7f42fa2d8144828dfff8b403541b62fd",
".git/objects/00/b46b7b37f2a9e4c77c7bfc07abd842c9de7ae5": "02778da0381eaead1a99bb122e438ba8",
".git/objects/6e/5fb6d25fa67464d66e82c5c4f6bd462b6e8280": "7d6e296460576459dce452d6dccda0e0",
".git/objects/6e/5aa3c8efadec1c2138def9865723ac8abd3032": "8cfb32f0bbd3096a908df0f5af7f2316",
".git/objects/9a/f73ba1e8935fb710565a87cbae3a130f52f97c": "c548a463407daeb77fa3be85a1a7c5d2",
".git/objects/36/3f84f0a25d5564a514ca70767df5e8dd7e9feb": "f639509df06f1ab60d556dd57b038d63",
".git/objects/36/3588fd3eeb390ebb5d4b92149b0918f949fd02": "78bc1f08a02f83330c1961088ba57971",
".git/objects/36/93ac75000336e9c345a96b4581d842200dd9e6": "0a55b14e506e1d9cf3acb495ece01742",
".git/objects/09/27b3e4c942f34cfe3d1cc3279b84008d40195d": "818ca6cd24e6ec88b0a6a443d8506754",
".git/objects/5d/cb28881c71c022fa2e8f12d34d0e11ee6d331f": "f24116a00ff7bb98f745c5ebaed5c868",
".git/objects/31/aef64b4389a4f5b5538b35d2334f306fd59dd0": "6405f09becca5ca931cf028a3463ce90",
".git/objects/31/e3f2e0fad55d39f02922522ccf37cb357f2c61": "8bdb9f09f30d1d695a374675d9bca67a",
".git/objects/91/9fd53a5dd8cc71e91173b7f228dcff533201db": "b46a651ac30630beead5657312cc9779",
".git/objects/62/31f70efd10533bd8600598a3a52a771f4e1743": "8640741595ef1b73bfa6938d2ab1fd5c",
".git/objects/62/7eee31a6799e5d7429172142d4baf6b237b1e4": "eee74a7624dc0dd0e0b4b11b06ee4ad8",
".git/objects/96/b9a4180a49961bdd24c11e240ab6fa429b943e": "658ae23308387486185464e1904eedff",
".git/objects/96/d3afc3dbed3b8457952283434dfe385880dfa6": "114f7c575debd5f030e23c9f9fab6af8",
".git/objects/96/466c977afa1c9309739abf64db8c0a99d42c9f": "e98bf002e2e00dc04ffcb636e15b645a",
".git/objects/3a/f1363f07247526eda5ce2e72d3fbc1ce360c66": "9721a9f86e1a4b0a1359a575451aa2ce",
".git/objects/3a/74bce459fdc91422fdf4b4f17ebdef713205ce": "8db47663e595f7ce857313e171f1a704",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/2377bf2cfa56e1fb269bba9e30636229432b96": "bb0d2a9eb3f0c825823cffad19d61fbd",
".git/objects/54/2fae92044d914716942b7ea7e36432cac641f0": "92aa64795b09e405a4475da237d9181c",
".git/objects/98/6629bec0423b07394bde3a6607355fb08f9614": "ece18b4725ebd911c4b59667e9af6996",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/6017b5eebd3c0c64c79e5a6fd7a33bbd6c4402": "91321bcd99befdcfff8ffa119328f095",
".git/objects/3f/08695a805bd143ac71137b2eee046df109f0ec": "9504efd60054f70b2a003a6d8e716025",
".git/objects/3f/946b80077fce742fdf3d9a95887d05f9332817": "05523fb5505f9e56bb918a17d0dbb566",
".git/objects/3f/d1e772bcd027b40b8683ea49ab2d14b63e07af": "85f53a2fb4a3a1aa7e02c16caba546c8",
".git/objects/30/bff6edf9621835520ead171790cc15df5967ed": "ced95f2b790bf7911124c72df9859d69",
".git/objects/5b/d6da8099e0fbca3eb9c9591aae3fe8f11afc3f": "ddf515e7d876ae62a6990e5014b5b27f",
".git/objects/37/2b5ad46bd232ff014dfd34ae915ad123baf457": "4149eae51f8cbaa9d3e7cb732e2b4010",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/756b710c4fafb9238865a279eac60ae7f5d7fc": "41a78f58a5992538f3a268d5c1e15a3f",
".git/objects/6d/d65f33604062077b755576aa39f804ee2c0b43": "9a29e0ccef5f3e402d025ed79764ecf7",
".git/objects/6d/6e3fdc5d1b8d19e98185301a55e663aac34d5c": "a027b760c09837a83e66864126c7c4cd",
".git/objects/6d/f0442fcbd30b01be91b9b536b7e4ac59d549df": "cf50ab7c639218f4cffac4a0b0b64ade",
".git/objects/01/829006cae41e2f70194fe790c1683d35b5a70f": "5707cb494ba0289d1203e2db3d21b2b6",
".git/objects/01/268412533973b66838905af2eaf2c0acfe808d": "ca79aa95f4691dd14c5c82f7a6edd7c4",
".git/objects/06/2597c4d538530cd0444d1a6ab787fec225cb55": "baac242ef2e65f6a361a64dfd96aa83d",
".git/objects/39/8d1761ff2a52ad8a026d16f4bc3cb96d34bede": "70a11920a10bbe14c4111c274faf9fe9",
".git/objects/39/a4bd17f2564d60cffc4cdc9414e2b8334bbbee": "187a1a04899403c470916d0731d4c510",
".git/objects/99/b60bedbbacf9e677a67a9f75861f8251a96f54": "26342a966d76df588c74c49cf1c8ed23",
".git/objects/99/b43ea86e20d37d2f40f6e5af673e1985b1f356": "008586f2d1a5ac75f5aeda8fca4e00dd",
".git/objects/55/56f402709e2028fe8ea6a7c0814d01c859d93f": "6da1eb7fba70506e965db27257b8024e",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/55/ea9876bd0dd09f84f553ff4efe0107852cd738": "50ab7a1256786dba01b2ea3a2d2d6f25",
".git/objects/55/58bff1da87853efb6f22f3a6bfd78f6af6e2cf": "69c855125cdfee66cedaac42d096a5d7",
".git/objects/97/fe80dada51981abc89115cb39ceb8d64d41c31": "ff11941640a51247a7fe22238bee20c1",
".git/objects/97/04a2c6bc650b9ac20c33a9ddcfa884aa592fef": "51a3d4c9562e2d52d8709474affee0e2",
".git/objects/0a/984c3f26aa32cafe116ae31b5e1ecbcb7c3615": "64948555399747a0d83bdf61a4fec98f",
".git/objects/90/0ad3932b9136cbc1e38e038197ab6aa5f1a385": "c0cb1acbe2b358fa65d07add82b802ca",
".git/objects/90/9148e15192d3764e330108fb300e5ef6fc88e1": "8b1b0405ec72be58d1a4009e77bb5ded",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/292c482c379e1602b0dc5d4b67410ebff40c07": "3d072626bb839bd1a962265c3e6512b0",
".git/objects/d4/60cf18e80ae70dfacaaa990470c576b20c489b": "ec98d288e3a901b4eed30eb9328e6cf5",
".git/objects/d4/e5b4d9edbc5636615ffa207c5233ef326f2ac1": "3b7754be3456a41f41ce628c6c64ef32",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/cffd89fa07982c43c718114c61d9a48908736f": "7409c932e501a5a529dba99faf52f924",
".git/objects/a0/eaaa5c41e8b1bdcb7187059d8644f889d69224": "418170af07101576972089830dbc7a6c",
".git/objects/a0/1598608cc2ad64dff93e81521473ca2fa2eb68": "cd5b54ccc2c4c33724ef4d024e8552b4",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/74d655b6b481f38aca3b106810f8f5ff6057ed": "150ecf728c614d2c6a1877c644959f8e",
".git/objects/dd/686aecf8f00874aee37cc2944557c825867b8e": "dd2f7db56149bff48fd56873d5a863b2",
".git/objects/dd/403cffa7151a05ea8356cef43182b027439a7c": "47c699166054543f1ec42d5911579c14",
".git/objects/dd/2f76d3e3bb756b0a97c9c1da72d348ebc16705": "858d4ee10018dd1a95c5c40c8c473cde",
".git/objects/dc/2a92e4b646addb860ad0dd1a8418fd04c5c6ef": "7d8f042b300178ca04a565037a9141bd",
".git/objects/b6/8d4a8f37803b888963d0b444285dc3dd9a38eb": "93e1604e6c7d43037075d6c528383086",
".git/objects/d5/44e45d4afb2201f55f3f8d942ed9522a65102d": "86a40f5018c00c6e6806aa2bd0f911f4",
".git/objects/d2/36659961137b603e30086285aeea9c01d22830": "b819c5ab1d678b66c2857c20afde6f43",
".git/objects/aa/c194b2164845864764ac6c799ceb8a81268330": "bada86c6c3555ee31b24938901c68613",
".git/objects/af/1f068ac9a9549746b588e32eb832c457d33f3d": "5a09bddb65fead033760c7c6a3af5bc1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a9c6c277885f26eb13bb4c663bbd6342b40d1e": "70e092e3732710705ba4cb79704cc753",
".git/objects/de/f27b219830484c9a0ebe1f19bc60a90e0a4fed": "3298859529dba6a01fd7e65616a69fd6",
".git/objects/de/dee460829d57c76367fff1cfbd951894386d62": "851e5a53b147c0ffdd7df9230806f648",
".git/objects/de/2f3ec402dedc3939a71597646c86dcb2cfe827": "f5f90db34353dcf8b60f27a018636c2a",
".git/objects/b0/f553d8a8218f6b779f6b7482b2004649860161": "74d339e90629c9f7c9c2c609d19bb738",
".git/objects/a6/02d911539da8819d7d3606fa84bb831d9852f6": "09b343089cbbf0fb6094d45fbffcfae4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/58805ee7ea8105a2f8e8b37252129dc24a719c": "22f22729a0fab61cbfc19e87ba1d33bc",
".git/objects/b9/b0673523532c4bc659ac3b8d23cfec8d0bb456": "43fa690c957ce57789f17a6c94e0cbb2",
".git/objects/ef/c3a8c8c1e9bb2654290ce1270e605ce020d16c": "96f6607c5d76f0e919b6df9c9097f05b",
".git/objects/ef/02d7f9447a80590e92bcd6a621f49a78913d56": "2ae013443eba96f1f038e18715946766",
".git/objects/c4/680ad5931bcb52df9b1fc5e13c090b6706a5f1": "e9a1f3419e99a24e1fedf6eeb53799f4",
".git/objects/ea/94e84515205f65e73cde452a7f7531d6c5fc45": "e1a16b39a654bd5c22e67d863f6024e6",
".git/objects/ea/535d1937b2da0174928315ecea7357a4ac393a": "75fcb554790111fac0d9d5903e3e8209",
".git/objects/cd/efe4f0723bbc19a1af1b2d1f351bf8c230fa7d": "ec281dd144499917f3b2b87b080d0e1f",
".git/objects/cc/688fddfca467ca4ef3a49067e1cf5b49ef4c47": "54086869eaa854cd63718dfae53b58a8",
".git/objects/cc/625cbbca6748d059dc3e551fc70c7c8b707adb": "e6a8065f237076b136293f5cdd948adb",
".git/objects/e6/be9e113bb8545ec62bedd4f44130bf42590a74": "a2557c883b660b2cb271274b93f97847",
".git/objects/f9/4d38b9cbc4fcb31edb3f2f2cdb4e8c5254cc93": "64072643c2287cf02a0882812211ee4b",
".git/objects/f9/419097c0ecb565354a1a6319b6d64e99b87c21": "45cc97cad7441c1c8cd1ad2c08b28bb2",
".git/objects/f0/62beda6739d58386c380585175ce3f53a5c0bb": "88cde73ed7161b915d55ef0516377696",
".git/objects/f7/504b08ae7934da0b08065db8b444b60053b589": "1bb1a9cd91854bd9044781a1489024c7",
".git/objects/f7/120aac0bf398867ce5f47360eca715f31f4a1b": "a2197f173eb33964192b398a807d293a",
".git/objects/fa/d235b8c0b0cbab20e5c8b66191d3e870643063": "04c4eba12065c5172f65e102bda92cdb",
".git/objects/fa/38ad61a0d093231e01fdc63aaf3e3d8f0b0e65": "653d92f630b240f843d8996810e9b3c0",
".git/objects/fa/98aab029649fb6f41a4b3b8d2e0b346e39ef98": "66cabc3843bb022ebdede99c52e4b058",
".git/objects/ff/0d40e3c010117950735433fae91c70a67f6b6b": "20cf4a3c5a6ef3c8b729d573b25ebc55",
".git/objects/ff/456fa0e61e2dae5553ef5189df417b31c9e44c": "1587127cc199d9c930f515ea1812f505",
".git/objects/c5/faa8154d62bf93a2cd0fc87414cd903e716a0d": "a1c0b2d546fc8efbe462f0a1a19de97e",
".git/objects/c2/4877afbc50aad872474fd2f93f13284912f15e": "184cfe52a9f2fb4181c1816286fb3a00",
".git/objects/e9/9b02542883f690b2a1066873a099d0af0b718a": "e008c0b6e3171dcd11a0fb359b10d59c",
".git/objects/e9/09a4a47bcffa64df80fc9c528cc09c8878ee3c": "56480f4986703567900095c5f80fb9d7",
".git/objects/f1/117a86ec201f9aaa655e6206960c90269b6405": "090c8c604ac301ac94326c83af8fbc6b",
".git/objects/e7/a3dc466e6cb326183d40e301ca1d4d3bf0b03e": "52c5cea75f555f7200fda1c2a27300bd",
".git/objects/cb/bc01abf94edfdd2b381491f0a6f5f31724429d": "ca3c0692b56078f740043c9582200184",
".git/objects/f8/2335b592c1a67c2925915188c69ceedb52ee09": "bcda33905f1f3f748d7e0bda8eca7464",
".git/objects/f8/860e886d285e001f21facf7cecb403f83609db": "b687be13577ea8ac58d67bd9cd1e30ca",
".git/objects/f8/7ca825f50698deee33528dc7a914435594b7f9": "4a69aad049e3e73addee42cdcef8db95",
".git/objects/ce/9c8868b273d679006d5b02c7e31a0337b603fd": "7299dd81e23e2733f81667b18bf0029f",
".git/objects/ce/0c3c026e15d613760f33cbbf12be448c636ba5": "0d7c0e3c00273e6859338225a2573567",
".git/objects/ce/dedc7a92806c44d2850157e560091124b51fc5": "7f7a343fdc1d70c8613fa5b5f6a67050",
".git/objects/ce/40220adbf617ec9b9c46c7ce5701046910bced": "76e6660fa3c391f7f3249b7cca2c2046",
".git/objects/ce/1c107101cb91e5c32c8365b580e7c7c530ee6e": "b625fc985d76fb285229ea845673ce25",
".git/objects/e0/9877be8e96332691d171f6f7cd16ff16a2dbb4": "23d93733285e23e6f711049bbdf65e29",
".git/objects/e0/9c34f6882c1c7458dfb7f30623f2f6bf9b74f6": "4762ba613c3ff16ff1d91b8c985100f9",
".git/objects/46/144071232c80ce595de00d328e3e6a7644404c": "d2791850954c655e7a32f809767c5730",
".git/objects/2c/fbddb8d5ea58ca6aaafdf27b69ef27c396ca56": "2ac7aeb083bc5350fa29502e79ad203b",
".git/objects/79/4895e2f2db711d4ebb0a5d06526f4dd68ed51f": "58cb39fa119cdc63cf0a302e4d12e1d9",
".git/objects/41/00b42c6907fe1d6c0fd0c0ce12fb54e583ce9a": "ba19c593dc7fd4e51c28cd1302301d27",
".git/objects/1b/c9072a947930c9a1d3bddb1f62ba437a3a2ad2": "3fe1e6d4eb134939bb6888d9003db77a",
".git/objects/77/4e64c2203358a5feee5cea01c40075c8b58ddd": "57521c7aaea54e640dc8c7832cec6b82",
".git/objects/77/2945b7a5bf3939898cb6fa813dfc562abcd2b6": "110c6502af5a387175811712a6e23eef",
".git/objects/1e/5668e042734c76a748a504afac4424ea7ff57d": "8c336f9d8643c65738d0d9070ba6b800",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/8659e0c0f7add7b21ba50f6db19ddaa76cdfca": "4a69869092e9da5bccb6782ac5b66c20",
".git/objects/4a/0c2d05956dd853bd4eac5c9d6705fe19c08ce4": "43c17512c61ceb109de7b0713069e861",
".git/objects/24/7caa7b7048b1f59a3d23021ce1aa1c6e61519f": "27512dbc4472926fa1952389ea308ad1",
".git/objects/23/0d224841624e138f5848f9eda2a8a9f6a8116f": "56e3810b15b6148ab95d2ef99694d049",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/4f/b594c12cdb589b3f6ef081f5da6cbeb8d775f3": "100a20da90fdd5df8de3dba5b375fa81",
".git/objects/4f/8af6b5517b484369312889ef2d67241204094b": "107339f600090cf58d0c6afe24ab4e0d",
".git/objects/12/03420763e4389378cf9e54b60ef5a6bbc3f999": "28c1f62263aa175cddb3bd7e668200cf",
".git/objects/8c/75248c107db2cb4789df64b1f3a5becfa8e434": "db25c09be27eb91ca3bb5723308e3b6e",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/8c/13208a0d9c7dabd90a9f885a2cf5d8f74e2d44": "a009827af2209c962a8bcc8655036201",
".git/objects/85/31f40a125d20f3427e62ee4a158fd912ecfc98": "45d18329c2ecae6cf81da7f973493e37",
".git/objects/85/2f7b827186da30e46007114104301894776840": "bc3d1de5782833918ad7cee6f6464b08",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/8d913a1bbd6b613e838f819ae511345c85c760": "2b953d7a9b68afac0bb3758f97c5f04c",
".git/objects/71/dfeb0218d1ad49022e628a64e19fe2ee4ec8ac": "442dc917810f528f8aadf436813f4ddd",
".git/objects/1c/3704a58b2a8d3ff7e48c6e39ebfa992d55e692": "2444f8188cff1687a096adbaace1b8e7",
".git/objects/1c/f39a42d60a61dc702e3742e9af8aacfa2b3205": "d83cacda31db8d58b7ed367083b52b98",
".git/objects/82/b18bf7d5047cf5116fc5bafa7871fd66d86f61": "b28a2af7de99c36033b8606eecea1960",
".git/objects/82/f60e5f33ccc43e8eebfe4389e6980b8db562c7": "97a673560b3ebbbbadd4b3fbf5f9481e",
".git/objects/82/48e29def089953abfb51cf7a1198c3d22d1cab": "58bfa7c135a77f920fda3879978c877f",
".git/objects/49/52706bb3153e3b46b9c5654b776c7b1d5b3806": "90d1d2ebcc6e84307229c778af6ff7f4",
".git/objects/49/f06df1dcb60af99327c37e03bcc8b57837adae": "e65f51f9b654a21528c5e253ee2cb85e",
".git/objects/40/498d1d6749a64745d2db7fa8eb7d97a0779013": "7ef9d0de97522a80f66b80ca3a280ca6",
".git/objects/40/da3b53a0b9fd30853faaaa98b74ae658210a6b": "0d654a459f844ed9d7b81f305683b5fa",
".git/objects/40/3f74643eef97105f619264f545f3a123b9150f": "130f9a46732c274b6a47216f171c4af3",
".git/objects/2e/318eae45e154de0104e4bd27a2a9730c313ed5": "fcc25142e40c092441e64ef092e3a265",
".git/objects/2e/3fd154a31f3c1e96e8cf7cc5092301a47b3418": "96a175621ddb016a2545c789388e7565",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/47/6f5d17bfd51c87e7cc710fd3dc8722d34aeb24": "d4ada444dd3df80dfdc7aa73e3b876f0",
".git/objects/78/b0db2dbcdcf4cb87878abe9a1467b4a0ef900e": "5f2d8c1c3d7b09e84f6b2b596b4d9d28",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/8b/1263912f8df1d220ea300d466bbed5603361ba": "c5ff0ada6f38d683e9eec1b6fd3f2ddb",
".git/objects/8b/95cfdcb7ff7bf18b2b371addc7b6ad52bd800d": "6b360eea8dc8f7db867b845633997b70",
".git/objects/8b/528166d5244d86e72c989772d387f4bd7d1b47": "91931a6f93ead4242fec950ab52eb641",
".git/objects/13/7b66ef284e58f62de5c3eb4dcd30961558b4a3": "d912eceb6d9d586ea3fa67161cabb9d4",
".git/objects/7f/533ae8a84a8794b8c2c4487fc703bdf5f3bac4": "50449720d6c82c376968676989332080",
".git/objects/7a/aefc4cfad227b932a38aab2bd3ae9173d13ff3": "df55e408b0965564ee8e487d21352b35",
".git/objects/14/6dfb883f0d0c9c2cc9d23e9266a5b54cfbf0f8": "eca624b36455a1b411e7eff867a2d867",
".git/objects/14/02c06751902264077844a5aa219779e079188b": "7a674195adea453ff2116c8f655d8dba",
".git/objects/14/f63f68895331a82168b95b119aebac9894a6bb": "8dc766dfa0c867225c6cc81dfd46abee",
".git/objects/22/30d771dd14d7290719a9632c16b930e4eece39": "79014095e273c18a1a6892db038fcd35",
".git/objects/22/bb865e482fc75d917b1a578f75d37e9d3905d6": "be9f7d7e97eb5bc6643855e8b487a500",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "da769b5fb8252bb641c451b5864e75ff",
".git/logs/refs/heads/main": "da769b5fb8252bb641c451b5864e75ff",
".git/logs/refs/remotes/origin/main": "98a73cd916fe61f5e2a5b7e582d5da19",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8840e18f4f24b72909035943094c5418",
".git/refs/remotes/origin/main": "8840e18f4f24b72909035943094c5418",
".git/index": "90644060f0d599bf12afa8b094881f02",
".git/COMMIT_EDITMSG": "9b1caccdbf2504c3e73ee22bec579ad2",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/NOTICES": "d0a07d9adad67d46425ab4f51e1f9969",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "4446c963dde6091a6b6de4cb1ae02947",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "5bf667199e13d61ee1276ac81332fb96",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "d5f290b7d52335a37a6638a1e9b1802b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "54ceb5219278e85265addd3153d23a1d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "373234d664ffe656d0fb4039a86ad513",
"assets/fonts/MaterialIcons-Regular.otf": "9288dffab69e84e7719da1a4b4167e5c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
