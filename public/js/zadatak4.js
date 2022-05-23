let assert=chai.assert
describe('TestoviParser', function(){
    describe('porediRezultate()', function(){
        it('Poredjenje identicnih izvjestaja',function(){
            var izvjestaj1=`{
                "stats": {
                  "suites": 2,
                  "tests": 3,
                  "passes": 3,
                  "pending": 0,
                  "failures": 0,
                  "start": "2021-11-05T15:00:26.343Z",
                  "end": "2021-11-05T15:00:26.352Z",
                  "duration": 9
                },
                "tests": [
                  {
                    "title": "T1",
                    "fullTitle": "T1",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T2",
                    "fullTitle": "T2",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T3",
                    "fullTitle": "T3",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }
                ],
                "pending": [],
                "failures": [],
                "passes": [
                  {
                    "title": "T1",
                    "fullTitle": "T1",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T2",
                    "fullTitle": "T2",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }
                  ,
                  {
                    "title": "T3",
                    "fullTitle": "T3",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }
                ]
              }
              
              `
              var izvjestaj2=`{
                "stats": {
                  "suites": 2,
                  "tests": 3,
                  "passes": 3,
                  "pending": 0,
                  "failures": 0,
                  "start": "2021-11-05T15:00:26.343Z",
                  "end": "2021-11-05T15:00:26.352Z",
                  "duration": 9
                },
                "tests": [
                  {
                    "title": "T1",
                    "fullTitle": "T1",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T2",
                    "fullTitle": "T2",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T3",
                    "fullTitle": "T3",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }
                ],
                "pending": [],
                "failures": [],
                "passes": [
                  {
                    "title": "T1",
                    "fullTitle": "T1",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T2",
                    "fullTitle": "T2",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T3",
                    "fullTitle": "T3",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }
                ]
              }
              
              `

            var poredjenjeObjekata=TestoviParser.porediRezultate(izvjestaj1,izvjestaj2)
            assert.equal(poredjenjeObjekata.promjene,"100.0%","Promjena potpuno izvrsena")
           assert.equal(poredjenjeObjekata.greske.length,0, "Niz gresaka mora biti prazan")

                
        });


        it('Poredjenje razlicitih testova1',function(){
            var izvjestaj1=`{
                "stats": {
                  "suites": 2,
                  "tests": 3,
                  "passes": 1,
                  "pending": 0,
                  "failures": 2,
                  "start": "2021-11-05T15:00:26.343Z",
                  "end": "2021-11-05T15:00:26.352Z",
                  "duration": 9
                },
                "tests": [
                  {
                    "title": "T1",
                    "fullTitle": "T1",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T2",
                    "fullTitle": "T2",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T3",
                    "fullTitle": "T3",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }
                ],
                "pending": [],
                "failures": [
                  {
                    "title": "T1",
                    "fullTitle": "T1",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T3",
                    "fullTitle": "T3",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }
                ],
                "passes": [
                  
                  {
                    "title": "T2",
                    "fullTitle": "T2",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }
                ]
              }`
              var izvjestaj2=`{
                "stats": {
                  "suites": 2,
                  "tests": 3,
                  "passes": 2,
                  "pending": 0,
                  "failures": 1,
                  "start": "2021-11-05T15:00:26.343Z",
                  "end": "2021-11-05T15:00:26.352Z",
                  "duration": 9
                },
                "tests": [
                  {
                    "title": "T1",
                    "fullTitle": "T1",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T2",
                    "fullTitle": "T2",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  },
                  {
                    "title": "T4",
                    "fullTitle": "T4",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }
                ],
                "pending": [],
                "failures": [{
                    "title": "T2",
                    "fullTitle": "T2",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }],
                "passes": [
                    {
                        "title": "T1",
                        "fullTitle": "T1",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                      },
                      {
                        "title": "T4",
                        "fullTitle": "T4",
                        "file": null,
                        "duration": 0,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                      }]
                     }`

            var poredjenjeObjekata=TestoviParser.porediRezultate(izvjestaj1,izvjestaj2)
            assert.equal(poredjenjeObjekata.promjene,"50%"," x treba da bude 50%")
           assert.equal(poredjenjeObjekata.greske.length,2, "Niz gresaka mora imati 2 el ")

                
        });

        

      it('Poredjenje razlicitih testova2',function(){
        var izvjestaj1=`{
            "stats": {
              "suites": 2,
              "tests": 2,
              "passes":2,
              "pending": 0,
              "failures": 1,
              "start": "2021-11-05T15:00:26.343Z",
              "end": "2021-11-05T15:00:26.352Z",
              "duration": 9
            },
            "tests": [
              {
                "title": "T1",
                "fullTitle": "T1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "T2",
                "fullTitle": "T2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              }
            ],
            "pending": [],
            "failures": [
              {
                "title": "T1",
                "fullTitle": "T1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              }
             
             
            ],
            "passes": [
              
              {
                "title": "T2",
                "fullTitle": "T2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              }
            ]
          }`
          var izvjestaj2=`{
            "stats": {
              "suites": 2,
              "tests": 3,
              "passes": 1,
              "pending": 0,
              "failures":2,
              "start": "2021-11-05T15:00:26.343Z",
              "end": "2021-11-05T15:00:26.352Z",
              "duration": 9
            },
            "tests": [
              {
                "title": "T1",
                "fullTitle": "T1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              },
              {
                "title": "T2",
                "fullTitle": "T2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              }
            ],
            "pending": [],
            "failures": [{
                "title": "T2",
                "fullTitle": "T2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
              }],
            "passes": [
                {
                    "title": "T1",
                    "fullTitle": "T1",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                  }]
                 }`

        var poredjenjeObjekata=TestoviParser.porediRezultate(izvjestaj1,izvjestaj2)
    assert.equal(poredjenjeObjekata.promjene,"33.3%"," x treba da bude 33.3%")
       assert.equal(poredjenjeObjekata.greske.length,1, "Niz gresaka mora imati 1 element ")

            
    });
    
    
    
  it('Poredjenje razlicitih testova3',function(){
    var izvjestaj1=`{
        "stats": {
          "suites": 2,
          "tests": 3,
          "passes": 1,
          "pending": 0,
          "failures": 2,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
        },
        "tests": [
          {
            "title": "T1",
            "fullTitle": "T1",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "T2",
            "fullTitle": "T2",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "T3",
            "fullTitle": "T3",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
        ],
        "pending": [],
        "failures": [{
          "title": "T1",
          "fullTitle": "T1",
          "file": null,
          "duration": 1,
          "currentRetry": 0,
          "speed": "fast",
          "err": {}
        },{
          "title": "T3",
          "fullTitle": "T3",
          "file": null,
          "duration": 1,
          "currentRetry": 0,
          "speed": "fast",
          "err": {}
        }],
        "passes": [
          {
            "title": "T2",
            "fullTitle": "T2",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
        ]
      }
      
      `
      var izvjestaj2=`{
        "stats": {
          "suites": 2,
          "tests": 3,
          "passes": 1,
          "pending": 0,
          "failures": 2,
          "start": "2021-11-05T15:00:26.343Z",
          "end": "2021-11-05T15:00:26.352Z",
          "duration": 9
        },
        "tests": [
          {
            "title": "T1",
            "fullTitle": "T1",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "T2",
            "fullTitle": "T2",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "T4",
            "fullTitle": "T4",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
        ],
        "pending": [],
        "failures": [{
          "title": "T2",
          "fullTitle": "T2",
          "file": null,
          "duration": 1,
          "currentRetry": 0,
          "speed": "fast",
          "err": {}
        }],
        "passes": [
          {
            "title": "T1",
            "fullTitle": "T1",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          },
          {
            "title": "T4",
            "fullTitle": "T4",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }
        ]
      }
      
      `

    var poredjenjeObjekata=TestoviParser.porediRezultate(izvjestaj1,izvjestaj2)
    assert.equal(poredjenjeObjekata.promjene,"50%","x mora da bude 50% ")
   assert.equal(poredjenjeObjekata.greske.length,2, "Niz gresaka je 2")

        
});

it('Provjera leksikografskog poretka kod istih izvjestaja',function(){
  var izvjestaj1=`{
    "stats": {
      "suites": 2,
      "tests": 3,
      "passes": 1,
      "pending": 0,
      "failures":2,
      "start": "2021-11-05T15:00:26.343Z",
      "end": "2021-11-05T15:00:26.352Z",
      "duration": 9
    },
    "tests": [
      {
        "title": "ABCDEF",
        "fullTitle": "ABCDEF",
        "file": null,
        "duration": 1,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },
      {
        "title": "KCD",
        "fullTitle": "KCD",
        "file": null,
        "duration": 0,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },
      {
        "title": "MCD",
        "fullTitle": "MCD",
        "file": null,
        "duration": 0,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }
    ],
    "pending": [],
    "failures": [{
        "title": "KCD",
        "fullTitle": "KCD",
        "file": null,
        "duration": 0,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      },
      {
        "title": "MCD",
        "fullTitle": "MCD",
        "file": null,
        "duration": 0,
        "currentRetry": 0,
        "speed": "fast",
        "err": {}
      }],
    "passes": [
        {
            "title": "ABCDEF",
            "fullTitle": "ABC",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
          }]
         }`
    var izvjestaj2=`{
      "stats": {
        "suites": 2,
        "tests": 3,
        "passes": 1,
        "pending": 0,
        "failures":2,
        "start": "2021-11-05T15:00:26.343Z",
        "end": "2021-11-05T15:00:26.352Z",
        "duration": 9
      },
      "tests": [
        {
          "title": "ABCDEF",
          "fullTitle": "ABCDEF",
          "file": null,
          "duration": 1,
          "currentRetry": 0,
          "speed": "fast",
          "err": {}
        },
        {
          "title": "KCD",
          "fullTitle": "KCD",
          "file": null,
          "duration": 0,
          "currentRetry": 0,
          "speed": "fast",
          "err": {}
        },
        {
          "title": "MCD",
          "fullTitle": "MCD",
          "file": null,
          "duration": 0,
          "currentRetry": 0,
          "speed": "fast",
          "err": {}
        }
      ],
      "pending": [],
      "failures": [{
          "title": "KCD",
          "fullTitle": "KCD",
          "file": null,
          "duration": 0,
          "currentRetry": 0,
          "speed": "fast",
          "err": {}
        },
        {
          "title": "MCD",
          "fullTitle": "MCD",
          "file": null,
          "duration": 0,
          "currentRetry": 0,
          "speed": "fast",
          "err": {}
        }],
      "passes": [
          {
              "title": "ABCDEF",
              "fullTitle": "ABC",
              "file": null,
              "duration": 1,
              "currentRetry": 0,
              "speed": "fast",
              "err": {}
            }]
           }`

  var poredjenjeObjekata=TestoviParser.porediRezultate(izvjestaj1,izvjestaj2)
assert.equal(poredjenjeObjekata.promjene,"33.3%"," x treba da bude 33.3%")
 assert.equal(poredjenjeObjekata.greske.length,2, "Niz gresaka mora imati 2 elementa ")

      
});


    });

});