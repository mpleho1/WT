let assert=chai.assert
describe('TestoviParser', function(){
    describe('dajTacnost()', function(){
        it('Prolaze svi testovi',function(){
            var izvjestaj=`{
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
                "title": "Test1",
                "fullTitle": "Test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Test3",
                "fullTitle": "Test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
            ],
            "pending": [],
            "failures": [],
            "passes": [
            {
            "title": "Ispravan test",
            "fullTitle": "Ispravan test",
            "file": null,
            "duration": 1,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
            },
            {
            "title": "Ispravan test2",
            "fullTitle": "ISpravan test2",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
            },
            {
                "title": "Ispravan test3",
                "fullTitle": "ISpravan test3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }
            ]
            }` 

            var tacnostobjekat=TestoviParser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"100%","Tacnost mora biti 100%")
           assert.equal(tacnostobjekat.greske.length,0, "Niz mora biti prazan")

                
        });
        it('Padaju svi testovi',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 3,
                "passes": 0,
                "pending": 0,
                "failures": 3,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Test1",
                "fullTitle": "Test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Test3",
                "fullTitle": "Test3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
            ],
            "pending": [],
            "failures": [ {
                "title": "Test1",
                "fullTitle": "Test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                    "title": "Test3",
                    "fullTitle": "Test3",
                    "file": null,
                    "duration": 0,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                }],
            "passes": []
            }` 

            var tacnostobjekat=TestoviParser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"0%","Tacnost mora biti 0%")
           assert.equal(tacnostobjekat.greske.length,3, "Niz mora imati sve testove")

                
        });

        it('Prolazi samo jedan test',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 4,
                "passes": 1,
                "pending": 0,
                "failures": 3,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Test1",
                "fullTitle": "Test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Test3",
                "fullTitle": "Test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
             {
                    "title": "Test4",
                    "fullTitle": "Test4",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    }
            ],
            "pending": [],
            "failures": [
                {
                    "title": "Test1",
                    "fullTitle": "Test1",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                {
                    "title": "Test2",
                    "fullTitle": "Test2",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                        "title": "Test4",
                        "fullTitle": "Test4",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        }
            ],
            "passes": [
            
            {
            "title": "Test3",
            "fullTitle": "Test3",
            "file": null,
            "duration": 0,
            "currentRetry": 0,
            "speed": "fast",
            "err": {}
            }
            ]
            }` 

            var tacnostobjekat=TestoviParser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"25%","Tacnost mora biti 25%")
           assert.equal(tacnostobjekat.greske.length,3, "Niz mora imati tri testa, Test1, Test2, Test4")

                
        });

        it('Testovi se ne mogu izvrsiti',function(){
            var izvjestaj=`{
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
                "title": "Test1",
                "fullTitle": "Test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
        
                "fullTitle": "Test3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }
            ],
            "pending": [],
            "failures": [ {
                "title": "Test1",
                "fullTitle": "Test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                }],
            "passes": [{
                "title": "Test3",
                "fullTitle": "Test3",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            }]
            }`

            var tacnostobjekat=TestoviParser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"0%","Tacnost mora biti 0%")
            assert.equal(tacnostobjekat.greske, "Testovi se ne mogu izvrsiti", "Testovi se ne mogu izvrsiti, izuzetak")
          

                
        });

        it('Prolazi pola testova',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 6,
                "passes": 3,
                "pending": 0,
                "failures": 3,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Test1",
                "fullTitle": "Test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Test3",
                "fullTitle": "Test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
             {
                    "title": "Test4",
                    "fullTitle": "Test4",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                        "title": "Test5",
                        "fullTitle": "Test5",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                        {
                            "title": "Test6",
                            "fullTitle": "Test6",
                            "file": null,
                            "duration": 1,
                            "currentRetry": 0,
                            "speed": "fast",
                            "err": {}
                            }
            ],
            "pending": [],
            "failures": [
                {
                    "title": "Test1",
                    "fullTitle": "Test1",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                {
                    "title": "Test2",
                    "fullTitle": "Test2",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                        "title": "Test3",
                        "fullTitle": "Test3",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        }
            ],
            "passes": [
            
                {
                    "title": "Test4",
                    "fullTitle": "Test4",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                {
                    "title": "Test5",
                    "fullTitle": "Test5",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                        "title": "Test6",
                        "fullTitle": "Test6",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        }
            ]
            }` 

            var tacnostobjekat=TestoviParser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"50%","Tacnost mora biti 50%")
           assert.equal(tacnostobjekat.greske.length,3, "Niz mora imati tri testa, Test1, Test2, Test3")

                
        });

        it('Pada samo jedan test',function(){
            var izvjestaj=`{
                "stats": {
                "suites": 2,
                "tests": 4,
                "passes": 3,
                "pending": 0,
                "failures": 1,
                "start": "2021-11-05T15:00:26.343Z",
                "end": "2021-11-05T15:00:26.352Z",
                "duration": 9
                },
                "tests": [
                {
                "title": "Test1",
                "fullTitle": "Test1",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
                {
                "title": "Test2",
                "fullTitle": "Test2",
                "file": null,
                "duration": 0,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
            },
            {
                "title": "Test3",
                "fullTitle": "Test3",
                "file": null,
                "duration": 1,
                "currentRetry": 0,
                "speed": "fast",
                "err": {}
                },
             {
                    "title": "Test4",
                    "fullTitle": "Test4",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    }
            ],
            "pending": [],
            "failures": [
                {
                    "title": "Test1",
                    "fullTitle": "Test1",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    }
                
            ],
            "passes": [
                {
                    "title": "Test2",
                    "fullTitle": "Test2",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    },
                    {
                        "title": "Test3",
                        "fullTitle": "Test3",
                        "file": null,
                        "duration": 1,
                        "currentRetry": 0,
                        "speed": "fast",
                        "err": {}
                        },
                {
                    "title": "Test4",
                    "fullTitle": "Test4",
                    "file": null,
                    "duration": 1,
                    "currentRetry": 0,
                    "speed": "fast",
                    "err": {}
                    }
            ]
            }` 

            var tacnostobjekat=TestoviParser.dajTacnost(izvjestaj)
            assert.equal(tacnostobjekat.tacnost,"75%","Tacnost mora biti 75%")
           assert.equal(tacnostobjekat.greske.length,1, "Niz mora imati jedan test i to Test1")

                
        });
        
  

    });

});
