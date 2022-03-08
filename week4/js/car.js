function init() {

    console.log({ fleetSalesObject });

    SetupCascadingList();
}

function SetupCascadingList() {

    const selectMf = document.querySelector("#selectMf")
    const selectModel = document.querySelector("#selectModel")
    const selectVersion = document.querySelector("#selectVersion")


    for (let mf in fleetSalesObject) {

        selectMf.options.add(new Option(mf, mf))
    }
    // Modern way of declaring a function inline instead of:  selectMf.onchange = function() {} 
    selectMf.onchange = () => {
        selectModel.length = 0;
        selectVersion.length = 0;
        selectModel.options.add(new Option('Choose a Model', '0'))
        selectVersion.options.add(new Option('Choose a Model', '0'))

        for (let model in fleetSalesObject[selectMf.value]) {
            console.log('model processing...')
            selectModel.options.add(new Option(model, model));
        }

    }

    selectModel.onchange = () => {
        selectVersion.length = 0;
        selectVersion.options.add(new Option('Choose a version', '0'))
        let versions = fleetSalesObject[selectMf.value][selectModel.value]
        for (let version of versions) {

            selectVersion.options.add(new Option(version, version))
        }

    }


}