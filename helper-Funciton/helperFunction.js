/* 
    -------------- Function To Compress The Image in THe File Upload --------------
*/

const compressImage = async (file, { quality = 1, type = file.type }) => {
    // Get as image data
    const imageBitmap = await createImageBitmap(file);

    // Draw to canvas
    const canvas = document.createElement('canvas');
    canvas.width = imageBitmap.width;
    canvas.height = imageBitmap.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(imageBitmap, 0, 0);

    // Turn into Blob
    const blob = await new Promise((resolve) =>
        canvas.toBlob(resolve, type, quality)
    );

    // Turn Blob into File
    return new File([blob], file.name, {
        type: blob.type,
    });
};

/* 
   ########## Function To Handle The File Change ##########
   ########## And Compress The Image By 50% ###############
   ########## Export It in THe File Upload ################
*/
const handleFileChange = async (event) => {
    const file = event.target.files[0];

    // We'll store the files in this data transfer object
    const dataTransfer = new DataTransfer();

    // Add the file to the data transfer object
    dataTransfer.items.add(file);


    // We compress the file by 50%
    const compressedFile = await compressImage(file, {
        quality: 0.1,
        type: 'image/jpeg',
    });

    // Update the formik state with the new file
    formik.setFieldValue("id_card_front_file", compressedFile);

};


/* 
    ############# Function To clear default input numbers ######################################
    ############# Add This Function To Event OnWheel  && OnKeyDown in the Input ################
*/

const handleKeyDown = (event) => {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
    }
};

const handleWheel = (event) => {
    event.target.blur();
}


/* 
    ############# Function To Handle The Event in The inputs With Any Action #################
    ############# Add This Function To Event OnChange in the Input ###########################
    ############# Set Values In Formik ######################################################
    ############# Compare Values In Formik ##################################################
*/

function setValuesInFormik(formik, data) {
    Object.keys(formik.values).map((key) => {
        formik.setFieldValue(key, data[key])
    })
}

function CompareValues(values, data) {
    const NewValues = Object.keys(values).filter((key) => {
        if (typeof (data[key]) === "boolean") {
            return values[key] !== String(data[key])
        }
        return values[key] !== data[key]
    }).map((key) => {
        return { [key]: values[key] }
    })

    if (NewValues.length === 0) {
        return false
    } else {
        const mergedObject = Object.assign({}, ...NewValues);
        return mergedObject
    }
}



