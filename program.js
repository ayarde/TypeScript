var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Shop;
(function (Shop) {
    var Clothe = (function () {
        function Clothe(title) {
            this.title = title;
            alert(title);
        }
        return Clothe;
    }());
    Shop.Clothe = Clothe;
    var Computing = (function () {
        function Computing(title) {
            this.title = title;
            alert('Computing Shop: ' + title);
        }
        return Computing;
    }());
    Shop.Computing = Computing;
})(Shop || (Shop = {}));
var Computing = Shop.Computing;
var computing = new Computing('Compumundo');
function start(launch) {
    return function (target) {
        target.prototype.launching = function () {
            alert(launch);
        };
    };
}
var Program = (function () {
    function Program() {
    }
    Program.prototype.setName = function (name) {
        this.name = name;
    };
    Program.prototype.getName = function () {
        return this.name;
    };
    Program.prototype.setVersion = function (version) {
        this.version = version;
    };
    Program.prototype.getVersion = function () {
        return this.version;
    };
    return Program;
}());
Program = __decorate([
    start('Launch of NodeJS and Angular 2 training'),
    __metadata("design:paramtypes", [])
], Program);
var program2 = new Program();
program2.launching();
var VideoEditor = (function (_super) {
    __extends(VideoEditor, _super);
    function VideoEditor() {
        return _super.apply(this, arguments) || this;
    }
    VideoEditor.prototype.setTimeLine = function (timeline) {
        this.timeline = timeline;
    };
    VideoEditor.prototype.getTimeLine = function () {
        return this.timeline;
    };
    VideoEditor.prototype.getAllData = function () {
        return this.getName() + "-" + this.getVersion() + "-" + this.getTimeLine();
    };
    return VideoEditor;
}(Program));
var editor = new VideoEditor();
editor.setName("Atom");
editor.setVersion(8);
editor.setTimeLine(5000);
console.log(editor.getAllData());
var programs = [];
function save() {
    var name = document.getElementById("name").value.toString();
    var program = new Program();
    program.setName(name);
    program.setVersion(1);
    programs.push(program);
    var list = "";
    for (var i = 0; i < programs.length; i++) {
        list = list + "<li>" + programs[i].getName() + "</li>";
    }
    var listado = document.getElementById("listado");
    listado.innerHTML = list;
    document.getElementById("name").value = "";
}
setInterval(function (var_name, hi) {
    console.log('Hi!');
}, 1000);
var fruits = [
    'Apple',
    'Orange',
    'Lemmon'
];
var go_over = fruits.map(function (fruit) {
    console.log(fruit);
    console.log(fruit.length);
});
