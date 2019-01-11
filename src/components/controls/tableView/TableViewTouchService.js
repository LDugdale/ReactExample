const initialPosition = -40
const maxDistance = 150;
const loadingDistance = 100;
let yPositionInitial = 0;
let yPosition = 0;
let yDistance = 0;

export default class TableViewTouchService {

    constructor(){
        this.touchEnd = this.touchEnd.bind(this);
        this.finishedLoading = this.finishedLoading.bind(this);
    }
    
    touchStart(event){
        yPositionInitial = event.touches[0].screenY;
    }

    touchMove(event){
        if(yDistance <= maxDistance){
            yPosition = event.touches[0].screenY;
            yDistance = yPosition - yPositionInitial;
        }
        if(yDistance > maxDistance){
            yPositionInitial += (yDistance - maxDistance);
            yDistance = maxDistance;
        }

        return yDistance >= initialPosition ? yDistance : initialPosition;
    }

    touchEnd(icon, background, wrapper){
        let reloadPage = false;
        if (yDistance >= maxDistance){
            this.moveIconToLoadDistance(icon, background);
            reloadPage = true;
        } else {
            this.moveIconToInitialPosition(icon, background, wrapper);
        }
        return reloadPage;
    }

    finishedLoading(icon, background, wrapper){
        yPositionInitial = 0;
        yPosition = initialPosition;
        yDistance = 0;
        this.moveIconToInitialPosition(icon, background, wrapper);
    }

    moveIconToInitialPosition(icon, background, wrapper){
        icon.style.transition = 'all 0.3s'
        icon.style.top = initialPosition + 'px';
        background.style.opacity = '0';        

        setTimeout(() => wrapper.style.display = 'none', 300);
        setTimeout(() => icon.style.transition = '', 300);

        yPosition = initialPosition;
    }

    moveIconToLoadDistance(icon, background, wrapper){
        icon.style.transition = 'all 0.3s'
        icon.style.top = loadingDistance + 'px';
        background.style.opacity = '0.5'
        setTimeout(() => icon.style.transition = '', 300);

        if(wrapper){
            setTimeout(() => wrapper.style.display = 'block', 300);
        }

        yPosition = loadingDistance;
    }
}

const tableViewTouchService = new TableViewTouchService();  
export { tableViewTouchService }  