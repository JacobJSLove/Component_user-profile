'use strict';

function meProfileCtrl(DataService) {
    var vm = this;
    vm.$onInit = function() {  
    vm.likeclass = 'like icon-heart-empty';
    vm.userdata = DataService.get();
    };
    /*  With API use $save(); forEach*/
    vm.follow = "FOLLOW";
    vm.following = function() {
        if (vm.follow == "FOLLOW") {
            vm.userdata.fallowing++;
            vm.follow = "FOLLOWED";
        }else {
            vm.userdata.fallowing--;
            vm.follow = "FOLLOW";
        }
    };
    vm.like = false;
    vm.liking = function() {
        if (!vm.like) {
            vm.userdata.likes++;
            vm.like = true;
            vm.likeclass = 'like icon-heart';
        }else {
            vm.userdata.likes--;
            vm.like = false;
            vm.likeclass = 'like icon-heart-empty';
        }
    };
    vm.addComment = function makeComment(text) {
        const comment = {

        }
    };
};
app.component('meprofile',{
        templateUrl :'templates/alldata.html',
        controller: meProfileCtrl,
        bindings: {
            userdata: '<',
            text: '<'
        }
    }
);