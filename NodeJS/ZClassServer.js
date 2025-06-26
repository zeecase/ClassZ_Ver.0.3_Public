//var http = require('http');
//var https = require('https');
//var fs = require('fs');
//var cron = require('node-cron');
//
//var server = http.createServer(function (req, res) {   //create web server
//    var url = req.url.split("?");
//
//    console.error("URL: " + url);
//    console.error("Method: " + req.method);
//    if (req.method == 'POST') {
//        var body = '';
//        req.on('data', function(data) {
//            body += data;
//        });
//        req.on('end', function() {
//            if (url[0] == "/saveData") {
//                var teacherCode = url[1];
//                var dataJSON = JSON.parse(body);
//                var classCode = dataJSON.ClassCode;
//                var zipCode = dataJSON.Zip;
//                var classFile = 'JSON/Class/' + teacherCode.toLowerCase() + "_" + classCode.toLowerCase() + '.json';
//
//                //update class code list
//                fs.readFile('JSON/Class/classList.json', function(err, data){
//                    if (err) return console.error(err);
//                    var codeJSON = JSON.parse(data);
//                    var codeList = codeJSON.ClassList;
//
//                    for(let x = 0; x < codeList.length; x++){
//                        if(codeList[x].teacherCode == teacherCode){
//                            codeList[x].classCode = classCode;
//                        }
//                    }
//                    codeJSON.ClassList = codeList;
//
//                    var codeData = JSON.stringify(codeJSON);
//                    console.error("Code list update: " + codeData);
//                    fs.writeFile('JSON/Class/classList.json', codeData, (err) => { if (err) throw err; });
//                });
//
//                //update zip list
//                fs.readFile('JSON/Weather/zipList.json', function(err, data){
//                    if (err) return console.error(err);
//                    var zipJSON = JSON.parse(data);
//                    var zipList = zipJSON.ZipList;
//                    var zipFound = false;
//
//                    for(let x = 0; x < zipList.length; x++){
//                        var zip = zipList[x];
//                        if(zip == zipCode){
//                            zipFound = true;
//                            break;
//                        }
//                    }
//
//                    if(!zipFound){
//                        zipList.push(zipCode);
//                        var weatherFile = 'JSON/Weather/' + zipCode + '.json';
//                        fs.writeFile(weatherFile, "", (err) => { if (err) throw err; });
//                    }
//                    zipJSON.ZipList = zipList;
//
//                    var zipData = JSON.stringify(zipJSON);
//                    console.error("Zip list update: " + zipData);
//                    fs.writeFile('JSON/Weather/zipList.json', zipData, (err) => { if (err) throw err; });
//                });
//
//                //update class data
//                fs.writeFile(classFile, body, (err) => { if (err) throw err; });
//                res.writeHead(200, {'Content-Type': 'text/html'});
//                res.end('post received');
//            } else if(url[0] == "/studentTracker") {
//                var classCode = url[1];
//                var student = url[2];
//
//
//                fs.readFile('JSON/Class/classList.json', function(err, data){
//                    if (err) return console.error(err);
//                    var codeJSON = JSON.parse(data);
//                    var codeList = codeJSON.ClassList;
//
//                    for(let x = 0; x < codeList.length; x++){
//                        if(codeList[x].classCode == classCode){
//
//                        }
//                    }
//                    codeJSON.ClassCodesList = codeList;
//
//                    var codeData = JSON.stringify(codeJSON);
//                    console.error("Code list update: " + codeData);
//                    fs.writeFile('JSON/Class/classList.json', codeData, (err) => { if (err) throw err; });
//                });
//
//                var studentFile = 'JSON/Class/' + teacherCode.toLowerCase() + "_" + classCode.toLowerCase() + '.json';
//            }
//        });
//    } else { //method == 'GET'
//
//        //Class Data
//            if (url[0] == "/classData") {
//                var classCode = url[1];
//                var isTeacher = false;
//
//                fs.readFile('JSON/Class/classList.json', function(err, data){
//                    if (err) return console.error(err);
//                    var codeJSON = JSON.parse(data);
//                    var codeList = codeJSON.ClassList;
//                    var codeValid = false;
//                    var teacherCode = "";
//
//                    for(let x = 0; x < codeList.length; x++){
//                        if(codeList[x].teacherCode == classCode){
//                            isTeacher = true;
//                            codeValid = true;
//                            classCode = codeList[x].classCode;
//                            teacherCode = codeList[x].teacherCode;
//                            break;
//                        } else if(codeList[x].classCode == classCode) {
//                            codeValid = true;
//                            teacherCode = codeList[x].teacherCode;
//                            break;
//                        }
//                    }
//
//                    if(codeValid){
//                        var classFile = 'JSON/Class/' + teacherCode + "_" + classCode + '.json';
//                        console.error("Class File: " + classFile);
//                        fs.readFile(classFile, (err, classData) => {
//                            res.writeHead(200, { 'Content-Type': 'text/json' });
//                            console.error("Class Data: " + classData);
//                            if(isTeacher){
//                                var classJSON = JSON.parse(classData);
//                                classJSON.IsTeacher = true;
//                                classData = JSON.stringify(classJSON);
//                            }
//
//                            res.write(classData);
//                            res.end();
//                        });
//                    } else {
//                        res.write('Invalid');
//                        console.error("Class data invalid");
//                        res.end();
//                    }
//
//                });
//
//        //Weather Data
//            } else if (url[0] == "/weatherData") {
//                var zipCode = url[1];
//                var weatherFile = 'JSON/Weather/' + zipCode + '.json';
//
//                fs.readFile(weatherFile, (err, data) => {
//                    if (err) return console.error(err);
//                    res.writeHead(200, { 'Content-Type': 'text/json' });
//                    res.write(data);
//                    res.end();
//                });
//
//            } else {
//                res.write('Invalid Request!');
//                res.end();
//            }
//    }
//
//});
//
//function weatherUpdate() {
//     fs.readFile('JSON/Weather/zipList.json', function(err, zipData){
//            var zipJSON = JSON.parse(zipData);
//            var zipList = zipJSON.ZipList;
//
//            for(let x = 0; x < zipList.length; x++){
//                var zip = zipList[x];
//                var url = 'https://api.openweathermap.org/data/2.5/forecast?zip=' + zip + '&appid=' + process.env.WEATHERAPI;
//                https.get(url, (resp) => {
//                  let data = '';
//
//                  resp.on('data', (chunk) => {
//                    data += chunk;
//                  });
//
//                  resp.on('end', () => {
//                      var weatherObj = JSON.parse(data);
//                      var weatherText = '{"Forecast": [';
//
//                      for(let x=0; x < weatherObj.list.length; x++){
//                          var time = weatherObj.list[x].dt_txt;
//                          time = time.split(' ');
//                          time = time[1].split(':');
//                          time = time[0];
//                          if(time == '18' || time == '21' || time == '00') {
//                                let dateObj = new Date(weatherObj.list[x].dt *1000);
//                                let date = dateObj.toLocaleDateString('en-US', {timeZone:'America/Los_Angeles'});
//                                let time = dateObj.toLocaleTimeString('en-US', {timeZone:'America/Los_Angeles'});
//                                let weather = weatherObj.list[x].weather[0].description;
//                                let temperature = Math.round(((weatherObj.list[x].main.temp - 273.15) * 1.8) + 32);
//                                let rain = weatherObj.list[x].pop;
//
//                                weatherText += '{"Date": "' + date + '", "Time": "' + time + '", "Weather": "' + weather + '", "Temperature": "' + temperature + '", "Rain": "' + rain + '"},';
//                          }
//                      }
//
//                      weatherText += ']}';
//
//                      let txt = weatherText.substr(0, weatherText.length - 3) + weatherText.substr(weatherText.length - 2); //remove last ,
//                      let curZip = resp.headers["x-cache-key"].split("=")[1];
//                      let fileName = 'JSON/Weather/' + curZip + '.json';
//                      fs.writeFile(fileName, txt, (err) => { if (err) throw err; });
//                  });
//
//                }).on("error", (err) => {
//                  console.error("Error: " + err.message);
//                });
//            }
//     });
//}
//
//server.listen(process.env.PORT);
//cron.schedule('0 0 0 * * *', async () => { //Update weather at midnight
//    await weatherUpdate();}, {
//    scheduled: true, timezone: "America/Los_Angeles"});
