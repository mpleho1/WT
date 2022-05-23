let assert=chai.assert
let div=document.getElementById("dodajInputPolja");
chai.should();
describe('test', function() { 
    afterEach(function() {
        this.xhr.restore();
        while(div.firstChild){
          div.removeChild(div.lastChild);
        }
      
      })
    beforeEach(function() {
        this.xhr = sinon.useFakeXMLHttpRequest();
        this.requests = [];
        this.xhr.onCreate = function(xhr) {
          this.requests.push(xhr);
        }.bind(this);
      });

      it('UnosInputPolja', function() {
        VjezbeAjax.dodajInputPolja(div,4);
        assert.equal(div.children.length,5);})

        it('Posalji', function(done) {
            var podaci = {brojVjezbi: 4, brojZadataka: [4,4,4,4]}
            var dataJson = JSON.stringify(podaci)
            VjezbeAjax.dodajInputPolja(div,4);
            VjezbeAjax.posaljiPodatke(div,function(err,data) {
              assert.equal(data.brojVjezbi,4)
              assert.equal(data.brojZadataka[0],4)
              assert.equal(data.brojZadataka[1],4)
              assert.equal(data.brojZadataka[2],4)
              assert.equal(data.brojZadataka[3],4)
              done()  
          });  this.requests[0].respond(200,{'Content-Type':'text/json'}, dataJson)
        })
});