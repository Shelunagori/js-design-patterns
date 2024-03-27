// Sensitive data object
const sensitiveData = {
    name: 'Secret Data',
    value: 42
};

// Proxy object to control access
const proxy = new Proxy(sensitiveData, {
    get: function(target, property) {
        // Logging
        console.log(`Attempting to access property "${property}"`);

        // Validation
        if (property === 'value') {
            console.log('Validation: Accessing sensitive data...');
            return 'Access Denied';
        } else {
            // Allow access to other properties
            return target[property];
        }
    },
    set: function(target, property, value) {
        // Logging
        console.log(`Attempting to modify property "${property}"`);

        // Validation
        if (property === 'value') {
            console.log('Validation: Modifying sensitive data...');
            console.log('Validation: Access Denied');
        } else {
            // Allow modification of other properties
            console.log('Validation: Property modification allowed');
            // Modify the property
            target[property] = value;
            // Auditing
            console.log(`Auditing: Property "${property}" modified with value "${value}"`);
        }
        // Ensure the original object remains unchanged
        return true;
    }
});

// Trying to access and modify sensitive data through proxy
console.log(proxy.name); // Allowed
console.log(proxy.value); // Denied
proxy.value = 50; // Denied
proxy.name = 'New name value'; // Allowed
