interface Permissions {
    canRead: boolean;
    canEdit: boolean;
    canDelete: boolean;
}

type RolePermissions = {
    admin: Permissions;
    user: Permissions;
    guest: Permissions;
};

type ReadOnlyRolePermissions = {
    readonly [K in keyof RolePermissions]: Readonly<Permissions>;
};

function setPermissions(rolePermissions: RolePermissions, role: keyof RolePermissions, newPermissions: Permissions): RolePermissions {
    if (role !== "guest") {
        return {
            ...rolePermissions,
            [role]: newPermissions,
        };
    }

    return rolePermissions;
}

