

export class MyCustomObserver {
    next(val: any){
        console.log(`valeur : ${val}`);
    }
    error(err:any){
        console.log(`erreur : ${err}`);
    }
    complete(){
        console.log(`Complete !`);
    }
}