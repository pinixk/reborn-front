const kakao = window.kakao

class MarkerHandler {
    constructor(vueKakaoMap, options){
        this.vueMap = vueKakaoMap;
        this.options = options;
    }

    add(userData, fnConv) {
        userData.forEach(data => {
            const option = fnConv(data);
            const markerInstance = new kakao.maps.Marker({
                map: this.vueMap.mapInstance,
                position: new kakao.maps.LatLng(option.lat, option.lng)
            })
            markerInstance.$$ = {
                data
            }
            if(this.options.markerClicked) {
                kakao.maps.event.addListener(markerInstance, "click", () => {
                    this.options.markerClicked(markerInstance.$$.data);
                })
            }
        })
    }

}

export default MarkerHandler;