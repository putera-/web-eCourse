<template>
    <div class="navbar-area container">
        <Navbar expand="lg" class="bnavbar">
            <Container type="fluid">
                <NavbarBrand>
                    <img src="/images/logo1.png" class="main-logo" alt="logo" />
                    <img src="/images/logo2.png" class="white-logo" alt="logo" />
                </NavbarBrand>
                <NavbarToggler />
                <NavbarCollapse>
                    <NavbarNavList margin="e-auto b-2 b-lg-0">
                        <NavItem>
                            <NuxtLink to="/" class="nav-link">Home </NuxtLink>
                        </NavItem>
                        <NavItem>
                            <NuxtLink to="/about" class="nav-link">About</NuxtLink>
                        </NavItem>
                        <NavItemDropdown>
                            <NavItemDropdownToggle>Classes</NavItemDropdownToggle>
                            <DropdownMenu>
                                <NuxtLink to="/classes" class="nav-link">Classes</NuxtLink>
                                <NuxtLink to="/single-class" class="nav-link">Classes Details</NuxtLink>
                            </DropdownMenu>
                        </NavItemDropdown>
                        <NavItem>
                            <NuxtLink to="/contact" class="nav-link">Contact </NuxtLink>
                        </NavItem>
                        <NavItemDropdown v-if="Auth.user">
                            <NavItemDropdownToggle class="avatar">
                                <b-div rounded="circle" />
                                {{ Auth.user.name }}
                            </NavItemDropdownToggle>
                            <DropdownMenu>
                                <NuxtLink to="/" class="nav-link">Profile</NuxtLink>
                                <div @click="doLogout" class="nav-link" id="logout">Logout</div>
                            </DropdownMenu>
                        </NavItemDropdown>
                        <NavItem v-else>
                            <NuxtLink to="/login" class="nav-link">Login </NuxtLink>
                        </NavItem>
                    </NavbarNavList>
                </NavbarCollapse>
            </Container>
        </Navbar>
    </div>
</template>

<script setup lang="ts">
const Auth = useAuthStore();

const doLogout = async () => {
    await Auth.logout();
}

</script>

<style scoped>
#logout {
    cursor: pointer;
}

.avatar {
    display: flex;
    align-items: center;
    gap: 4px;
}

.avatar>div {
    width: 35px;
    height: 35px;
    background-color: gray;
}

.navbar-area {
    background-color: transparent;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    top: 15px;
    position: relative;
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    padding-left: 0;
}

.navbar-area a.router-link-exact-active {
    color: #BA8324;
}

.navbar .navbar-brand .white-logo {
    display: none;
}

.nav-link {
    padding-top: 0;
    padding-bottom: 0;
}

.nav-link:hover {
    background-color: rgb(219, 219, 219);
}

.dropdown .nav-link {
    padding-top: 10px;
    padding-bottom: 10px;
}

.navbar-nav {
    min-height: 50px;
    align-items: center;
}

.bnavbar {
    float: left;
    width: 100%;
    position: absolute;
    padding: 20px 0 0;
    height: auto;
    z-index: 999;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    max-width: 1140px;
}

.bnavbar {
    background: #ffffff;
    background-image: url(/images/leftNav.png), url(/images/rightNav.png);
    background-size: contain;
    background-position: center left, center right;
    background-repeat: no-repeat, no-repeat;

    /* background: linear-gradient(135deg,  #ffd65e 1%,#ada030 27%,#d1d13c 67%,#9b6b17 99%); */

    border-radius: 90px;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}



.nav-link.dropdown-toggle {
    cursor: pointer;
}

@media only screen and (min-width: 990px) {
    .navbar-nav {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        gap: 20px;
    }
}

@media only screen and (max-width: 991px) {
    .navbar-area {
        top: 10px;
    }

    .bnavbar {
        border-radius: 5px;
        background-image: none;
        padding: 8px;
    }

    .white-logo {
        display: none;
    }

    .dropdown-menu .nav-link {
        padding-left: 10px;
        padding-right: 10px;
    }
}

@media only screen and (max-width: 640px) {
    .navbar-area {
        top: 0px;
    }

    .bnavbar {
        border-radius: 0px;
    }
}
</style>