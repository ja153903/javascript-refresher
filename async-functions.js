// this can be cleaned up however
const createEmployeeWorkflow = (cb) => {
    createEmployee((err, employee) => {
        if (err) {
            cb(err);
        }

        if (employee.needsManager()) {
            selectManager(employee, (err, manager) => {
                if (err) {
                    return cb(err);
                }

                employee.manager = manager;
                saveEmployee(employee, (err) => {
                    if (err) {
                        return cb(err);
                    }

                    cb(undefined, employee);
                });
            });
        } else {
            saveEmployee(employee, (err) => {
                if (err) {
                    return cb(err);
                }

                cb(undefined, employee);
            });
        }
    });
}

const createEmployeeWorkflow = async (cb) => {
    var err;

    try {
        var employee = createEmployee();

        if (employee.needsManager()) {
            var manager = selectManager(employee);
            employee.manager = manager;
        }

        await saveEmployee(employee);
    } catch (ex) {
        err = ex;
    }

    cb(err, employee);
}