/*----------------------------------------------
Index Of Script
------------------------------------------------

:: Tooltip
:: Fixed Nav
:: Magnific Popup
:: Sidebar Widget
:: Page Loader
:: Counter
:: Progress Bar
:: Page Menu
:: Close  navbar Toggle
:: user toggle
:: Data tables
:: Form Validation
:: Active Class for Pricing Table
:: Scrollbar
:: checkout
:: Modal View
:: Datatables
:: image-upload
:: video
:: Button
:: Pricing tab
:: Custom Toggle

------------------------------------------------
Index Of Script
----------------------------------------------*/

(function (jQuery) {

    "use strict";

    jQuery(document).ready(function () {

        /*---------------------------------------------------------------------
        Tooltip
        -----------------------------------------------------------------------*/
        jQuery('[data-toggle="popover"]').popover();
        jQuery('[data-toggle="tooltip"]').tooltip();

        /*---------------------------------------------------------------------
        Fixed Nav
        -----------------------------------------------------------------------*/

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 0) {
                $('.iq-top-navbar').addClass('fixed');
            } else {
                $('.iq-top-navbar').removeClass('fixed');
            }
        });

        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 0) {
                $('.white-bg-menu').addClass('sticky-menu');
            } else {
                $('.white-bg-menu').removeClass('sticky-menu');
            }
        });

        /*---------------------------------------------------------------------
         Sidebar Widget
         -----------------------------------------------------------------------*/

        jQuery(document).on("click", '.iq-menu > li > a', function () {
            jQuery('.iq-menu > li > a').parent().removeClass('active');
            jQuery(this).parent().addClass('active');
        });

        // Active menu
        var parents = jQuery('li.active').parents('.iq-submenu.collapse');

        parents.addClass('show');


        parents.parents('li').addClass('active');
        jQuery('li.active > a[aria-expanded="false"]').attr('aria-expanded', 'true');


        /*---------------------------------------------------------------------
        Page Loader
        -----------------------------------------------------------------------*/
        jQuery("#load").fadeOut();
        jQuery("#loading").delay().fadeOut("");

        /*---------------------------------------------------------------------
        Progress Bar
        -----------------------------------------------------------------------*/
        jQuery('.iq-progress-bar > span').each(function () {
            let progressBar = jQuery(this);
            let width = jQuery(this).data('percent');
            progressBar.css({
                'transition': 'width 2s'
            });

            setTimeout(function () {
                progressBar.appear(function () {
                    progressBar.css('width', width + '%');
                });
            }, 100);
        });

        jQuery('.progress-bar-vertical > span').each(function () {
            let progressBar = jQuery(this);
            let height = jQuery(this).data('percent');
            progressBar.css({
                'transition': 'height 2s'
            });
            setTimeout(function () {
                progressBar.appear(function () {
                    progressBar.css('height', height + '%');
                });
            }, 100);
        });
        /*---------------------------------------------------------------------
        Page Menu
        -----------------------------------------------------------------------*/
        jQuery(document).on('click', '.wrapper-menu', function () {
            jQuery(this).toggleClass('open');
        });

        jQuery(document).on('click', ".wrapper-menu", function () {
            jQuery("body").toggleClass("sidebar-main");
        });

        /*---------------------------------------------------------------------
         Close  navbar Toggle
         -----------------------------------------------------------------------*/

        jQuery('.close-toggle').on('click', function () {
            jQuery('.h-collapse.navbar-collapse').collapse('hide');
        });

        /*---------------------------------------------------------------------
        user toggle
        -----------------------------------------------------------------------*/
        jQuery(document).on('click', '.iq-user-toggle', function () {
            jQuery(this).parent().addClass('show-data');
        });

        jQuery(document).on('click', ".close-data", function () {
            jQuery('.iq-user-toggle').parent().removeClass('show-data');
        });
        jQuery(document).on("click", function (event) {
            var $trigger = jQuery(".iq-user-toggle");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                jQuery(".iq-user-toggle").parent().removeClass('show-data');
            }
        });
        /*-------hide profile when scrolling--------*/
        jQuery(window).scroll(function () {
            let scroll = jQuery(window).scrollTop();
            if (scroll >= 10 && jQuery(".iq-user-toggle").parent().hasClass("show-data")) {
                jQuery(".iq-user-toggle").parent().removeClass("show-data");
            }
        });
        let Scrollbar = window.Scrollbar;
        if (jQuery('.data-scrollbar').length) {

            Scrollbar.init(document.querySelector('.data-scrollbar'), {continuousScrolling: false});
        }

        /*---------------------------------------------------------------------
        Data tables
        -----------------------------------------------------------------------*/
        if ($.fn.DataTable) {
            $('.data-table').DataTable();
        }

        /*---------------------------------------------------------------------
        Form Validation
        -----------------------------------------------------------------------*/

        // Example starter JavaScript for disabling form submissions if there are invalid fields
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);

        /*---------------------------------------------------------------------
         Active Class for Pricing Table
         -----------------------------------------------------------------------*/
        jQuery("#my-table tr th").click(function () {
            jQuery('#my-table tr th').children().removeClass('active');
            jQuery(this).children().addClass('active');
            jQuery("#my-table td").each(function () {
                if (jQuery(this).hasClass('active')) {
                    jQuery(this).removeClass('active')
                }
            });
            var col = jQuery(this).index();
            jQuery("#my-table tr td:nth-child(" + parseInt(col + 1) + ")").addClass('active');
        });

        /*---------------------------------------------------------------------
        Scrollbar
        -----------------------------------------------------------------------*/

        jQuery(window).on("resize", function () {
            if (jQuery(this).width() <= 1299) {
                jQuery('#salon-scrollbar').addClass('data-scrollbar');
            } else {
                jQuery('#salon-scrollbar').removeClass('data-scrollbar');
            }
        }).trigger('resize');

        jQuery('.data-scrollbar').each(function () {
            var attr = $(this).attr('data-scroll');
            if (typeof attr !== typeof undefined && attr !== false) {
                let Scrollbar = window.Scrollbar;
                var a = jQuery(this).data('scroll');
                Scrollbar.init(document.querySelector('div[data-scroll= "' + a + '"]'));
            }
        });


        /*---------------------------------------------------------------------
          Datatables
       -----------------------------------------------------------------------*/
        if (jQuery('.data-tables').length) {
            $('.data-tables').DataTable();
        }

        /*---------------------------------------------------------------------
        Button
        -----------------------------------------------------------------------*/
        if ($.fn.select2 !== undefined) {
            $("#single").select2({
                placeholder: "Select a Option",
                allowClear: true
            });
            $("#multiple").select2({
                placeholder: "Select a Multiple Option",
                allowClear: true
            });
            $("#multiple2").select2({
                placeholder: "Select a Multiple Option",
                allowClear: true
            });
        }

        /*---------------------------------------------------------------------
        Pricing tab
        -----------------------------------------------------------------------*/
        jQuery(window).on('scroll', function (e) {

            // Pricing Pill Tab
            var nav = jQuery('#pricing-pills-tab');
            if (nav.length) {
                var contentNav = nav.offset().top - window.outerHeight;
                if (jQuery(window).scrollTop() >= (contentNav)) {
                    e.preventDefault();
                    jQuery('#pricing-pills-tab li a').removeClass('active');
                    jQuery('#pricing-pills-tab li a[aria-selected=true]').addClass('active');
                }
            }
        });
        /*---------------------------------------------------------------------
        Remove collapse panel
        -----------------------------------------------------------------------*/

        jQuery(window).on("resize", function () {
            if (jQuery(this).width() <= 1199) {
                jQuery('.iq-note-callapse-menu .collapse').addClass('show');
            } else {
                jQuery('.iq-note-callapse-menu .collapse').removeClass('show');
            }
        }).trigger('resize');


        /*Modal View*/
        $(document).on('click', '.view-note', function () {
            var noteId = $(this).data('note-id');
            console.log('Note ID:', noteId);
            $.ajax({
                url: '/notes/' + noteId,
                type: 'GET',
                success: function (data) {
                    $('#noteModalTitle').text(data.title);
                    $('#noteModalContent').html(data.content);
                    $('#noteModal').modal('show');
                }
            });
        });


        /*---------------------------------------------------------------------
        List and Grid
        -----------------------------------------------------------------------*/
        $('.list-grid-toggle').on('click', function () {
            const txt = $(".icon").hasClass('active') ? 'List' : 'Grid';
            $('.icon').toggleClass('active');
            $(".label").text(txt);
        })

        $('.home[data-toggle="pill"]').on('shown.bs.tab', function (e) {
            const target = $(e.target).attr("data-init") // activated tab
            initMurri(target)
        });

        if ($('.home').hasClass('active')) {
            initMurri($('.home.active').attr('data-init'))
        }
        var noteGrid = null;
        var sharedGrid = null;
        var favGrid = null;
        var pinGrid = null;

        function initMurri(type) {
            console.log(type)
            switch (type) {
                case 'shared-note':
                    if (!$('.shared-note-grid').hasClass('muuri')) {
                        if ($('.shared-note-grid').length > 0) {
                            sharedGrid = new Muuri('.shared-note-grid', {
                                items: '.shared-note-item',
                                dragEnabled: true
                            });
                            sharedGrid.on('dragEnd', function (item, event) {
                                console.log(event);
                                console.log(item);
                            });
                        }
                    }
                    break;
                case 'pin-note':
                    if ($('.pin-note-grid').length > 0) {
                        pinGrid = new Muuri('.pin-note-grid', {
                            items: '.pin-note-item',
                            dragEnabled: true
                        });
                        pinGrid.on('dragEnd', function (item, event) {
                            console.log(event);
                            console.log(item);
                        });
                    }
                    break;
                case 'fav-note':
                    if ($('.fav-note-grid').length > 0) {
                        favGrid = new Muuri('.fav-note-grid', {
                            items: '.fav-note-item',
                            dragEnabled: true
                        });
                        favGrid.on('dragEnd', function (item, event) {
                            console.log(event);
                            console.log(item);
                        });
                    }
                    break;
                case 'note':
                    // Note drag and drop muri plugin
                    if ($('.note-grid').length > 0) {
                        if (!$('.note-grid').hasClass('muuri')) {
                            noteGrid = new Muuri('.note-grid', {
                                items: '.note-item',
                                dragEnabled: true
                            });
                            noteGrid.on('dragEnd', function (item, event) {
                                console.log(event);
                                console.log(item);
                            });
                        }
                    }
                    break;
            }
        }
    });

    /*For notes colors*/

    $(document).ready(function () {
        let allNotesGridView = $('#all-notes-grid-view');
        let allNotesListView = $('#all-notes-list-view');
        if (allNotesGridView.children().length === 1 || allNotesListView.children().length === 1) {
            $('.no-all-notes').show();
        } else {
            $('.no-all-notes').hide();
        }
    });

    /*For pinned notes*/
    $(document).on('click', $("a[href=\'#note3\']"), function (e) {
        let pinnedNotesGridView = $('#pinned-notes-grid-view');
        let pinnedNotesListView = $('#pinned-notes-list-view');
        if (pinnedNotesGridView.children().length === 1 || pinnedNotesListView.children().length === 1) {
            $('.no-pin-notes').show();
        } else {
            $('.no-pin-notes').hide();
        }
    });

    $(document).on('click', '.pin-button', function (e) {
        e.preventDefault();
        console.log("Started function pin");
        let noteId = $(this).data('note-id');
        let isPinned = $(this).find('i').hasClass('pin-active');

        $.ajax({
            type: 'POST',
            url: '/notes/' + noteId + '/pin',
            data: {isPinned: !isPinned},
            success: function (response) {

                let allNotesGridView = $('#all-notes-grid-view');
                //let favoriteNotesList = $('#favorite-notes-grid-view');
                let pinnedNotesGridView = $('#pinned-notes-grid-view');
                let favoriteNotesGridView = $('#favorite-notes-grid-view');

                let allNotesListView = $('#all-notes-list-view');
                let pinnedNotesListView = $('#pinned-notes-list-view');
                let favoriteNotesListView = $('#favorite-notes-list-view');

                let pinIconAll = allNotesGridView.find('[data-note-id="' + noteId + '"]').closest('.pin-button');
                //let pinIconShared=0;
                let pinIconPin = pinnedNotesGridView.find('[data-note-id="' + noteId + '"]').closest('.pin-button');
                let pinIconFav = favoriteNotesGridView.find('[data-note-id="' + noteId + '"]').closest('.pin-button');

                let pinIconAllList = allNotesListView.find('[data-note-id="' + noteId + '"]').closest('.pin-button');
                let pinIconPinList = pinnedNotesListView.find('[data-note-id="' + noteId + '"]').closest('.pin-button');
                let pinIconFavList = favoriteNotesListView.find('[data-note-id="' + noteId + '"]').closest('.pin-button');

                if (isPinned) {

                    pinIconAll.find('i').removeClass('fas pin-active').addClass('las');
                    pinIconFav.find('i').removeClass('fas pin-active').addClass('las');

                    pinIconAllList.find('i').removeClass('fas pin-active my-icon-18').addClass('las');
                    pinIconFavList.find('i').removeClass('fas pin-active my-icon-18').addClass('las');

                    pinnedNotesGridView.find('[data-note-id="' + noteId + '"]').removeAttr('data-toggle title').tooltip('dispose');
                    pinnedNotesGridView.find('[data-note-id="' + noteId + '"]').closest('.col-lg-4').remove();

                    pinnedNotesListView.find('[data-note-id="' + noteId + '"]').removeAttr('data-toggle title').tooltip('dispose');
                    pinnedNotesListView.find('[data-note-id="' + noteId + '"]').closest('tr').remove();

                    let unpinnedNoteInAllGrid = pinIconAll.closest('.col-lg-4');
                    allNotesGridView.find('.pin-active:last').closest('.col-lg-4').after(unpinnedNoteInAllGrid);

                    let unpinnedNoteInAllList = pinIconAllList.closest('tr');
                    allNotesListView.find('.pin-active:last').closest('tr').after(unpinnedNoteInAllList);

                    let unpinnedNoteInFavGrid = pinIconFav.closest('.col-lg-4');
                    favoriteNotesGridView.find('.pin-active:last').closest('.col-lg-4').after(unpinnedNoteInFavGrid);

                    let unpinnedNoteInFavList = pinIconFavList.closest('tr');
                    favoriteNotesListView.find('.pin-active:last').closest('tr').after(unpinnedNoteInFavList);


                    if (pinnedNotesGridView.children().length === 1) {
                        $('.no-pin-notes').show();
                    }

                } else {
                    pinIconAll.find('i').removeClass('las').addClass('fas pin-active');
                    pinIconFav.find('i').removeClass('las').addClass('fas pin-active');

                    pinIconAllList.find('i').removeClass('las').addClass('fas pin-active my-icon-18');
                    pinIconFavList.find('i').removeClass('las').addClass('fas pin-active my-icon-18');

                    allNotesGridView.prepend(pinIconAll.closest('.col-lg-4'));
                    favoriteNotesGridView.prepend(pinIconFav.closest('.col-lg-4'));

                    allNotesListView.prepend(pinIconAllList.closest('tr'));
                    favoriteNotesListView.prepend(pinIconFavList.closest('tr'));

                    pinnedNotesGridView.prepend(pinIconAll.closest('.col-lg-4').clone());
                    pinnedNotesListView.prepend(pinIconAllList.closest('tr').clone());

                    pinnedNotesGridView.find('[data-note-id="' + noteId + '"]').attr('data-toggle', 'tooltip').attr('data-original-title', 'unpin content').tooltip();
                    pinnedNotesListView.find('[data-note-id="' + noteId + '"]').attr('data-toggle', 'tooltip').attr('data-original-title', 'unpin content').tooltip();

                    if (pinnedNotesGridView.children().length !== 1) {
                        console.log("Inside: if (pinnedNotesGridView.children().length !== 1)")
                        $('.no-pin-notes').hide();
                    }
                }
                $(this).tooltip('hide');
            }.bind(this),
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error updating note pin status: ' + errorThrown);
            }
        });
    });


    /*For fav notes*/
    $(document).on('click', $("a[href=\'#note4\']"), function (e) {
        let favoriteNotesGridView = $('#favorite-notes-grid-view');
        let favoriteNotesListView = $('#favorite-notes-list-view');
        if (favoriteNotesGridView.children().length === 1 || favoriteNotesListView.children().length === 1) {
            $('.no-fav-notes').show();
        } else {
            $('.no-fav-notes').hide();
        }
    });
    $(document).on('click', '.favorite-button', function (e) {
        e.preventDefault();
        let noteId = $(this).data('note-id');
        let isFavourite = $(this).find('i').hasClass('fav-active');

        $.ajax({
            type: 'POST',
            url: '/notes/' + noteId + '/favorite',
            data: {isFavourite: !isFavourite},
            success: function (response) {

                let allNotesGridView = $('#all-notes-grid-view');
                //let favoriteNotesList = $('#favorite-notes-grid-view');
                let pinnedNotesGridView = $('#pinned-notes-grid-view');
                let favoriteNotesGridView = $('#favorite-notes-grid-view');

                let allNotesListView = $('#all-notes-list-view');
                let pinnedNotesListView = $('#pinned-notes-list-view');
                let favoriteNotesListView = $('#favorite-notes-list-view');

                let favIconAll = allNotesGridView.find('[data-note-id="' + noteId + '"]').closest('.favorite-button');
                //let pinIconShared=0;
                let favIconPin = pinnedNotesGridView.find('[data-note-id="' + noteId + '"]').closest('.favorite-button');
                let favIconFav = favoriteNotesGridView.find('[data-note-id="' + noteId + '"]').closest('.favorite-button');

                let favIconAllList = allNotesListView.find('[data-note-id="' + noteId + '"]').closest('.favorite-button');
                let favIconPinList = pinnedNotesListView.find('[data-note-id="' + noteId + '"]').closest('.favorite-button');
                let favIconFavList = favoriteNotesListView.find('[data-note-id="' + noteId + '"]').closest('.favorite-button');

                if (isFavourite) {

                    favIconAll.find('i').removeClass('fas fav-active').addClass('lar');
                    favIconPin.find('i').removeClass('fas fav-active').addClass('lar');

                    favIconAllList.find('i').removeClass('fas fav-active my-icon-21').addClass('lar');
                    favIconPinList.find('i').removeClass('fas fav-active my-icon-21').addClass('lar');

                    favoriteNotesGridView.find('[data-note-id="' + noteId + '"]').removeAttr('data-toggle title').tooltip('dispose');
                    favoriteNotesGridView.find('[data-note-id="' + noteId + '"]').closest('.col-lg-4').remove();

                    favoriteNotesListView.find('[data-note-id="' + noteId + '"]').removeAttr('data-toggle title').tooltip('dispose');
                    favoriteNotesListView.find('[data-note-id="' + noteId + '"]').closest('tr').remove();

                    if (favoriteNotesGridView.children().length === 1) {
                        $('.no-fav-notes').show();
                    }
                } else {
                    favIconAll.find('i').removeClass('lar').addClass('fas fav-active');
                    favIconPin.find('i').removeClass('lar').addClass('fas fav-active');

                    favIconAllList.find('i').removeClass('lar').addClass('fas fav-active my-icon-21');
                    favIconPinList.find('i').removeClass('lar').addClass('fas fav-active my-icon-21');

                    favoriteNotesGridView.prepend(favIconAll.closest('.col-lg-4').clone());
                    favoriteNotesListView.prepend(favIconAllList.closest('tr').clone());

                    favoriteNotesGridView.find('[data-note-id="' + noteId + '"]').attr('data-toggle', 'tooltip').attr('data-original-title', 'favorite').tooltip();
                    favoriteNotesListView.find('[data-note-id="' + noteId + '"]').attr('data-toggle', 'tooltip').attr('data-original-title', 'favorite').tooltip();

                    if (favoriteNotesGridView.children().length !== 1) {
                        $('.no-fav-notes').hide();
                    }
                }
                $(this).tooltip('hide');
            }.bind(this),
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error updating note favorite status: ' + errorThrown);
            }
        });
    });


    $('.dropdown-menu-right').on('click', function (event) {
        if ($(this).find('[data-toggle]').length == 0) {
            event.stopPropagation();
        }
    });

    $(document).ready(function () {
        $('.js-example-basic-single').select2();
    });
    $(".select2").select2({
        placeholder: "Select a Option",
        allowClear: true
    });
    $('.basic-select').picker();
    $(document).on('click', '[data-extra-toggle="toggle"]', function (e) {
        const hideClassName = $(this).data('extra-class-hide')
        const hideIdName = $(this).data('extra-id-hide')
        const collapse = $(this).closest('.collapse')
        collapse.collapse('hide')
        if (hideClassName !== undefined && hideClassName !== null) {
            $(hideClassName).addClass('d-none')
        }

        if (hideIdName !== undefined && hideIdName !== null) {
            $(hideIdName).addClass('d-none')
        }

        const showClassName = $(this).data('extra-class-show')
        const showIdName = $(this).data('extra-id-show')
        if (showClassName !== undefined && showClassName !== null) {
            $(showClassName).removeClass('d-none')
        }

        if (showIdName !== undefined && showIdName !== null) {
            $(showIdName).removeClass('d-none')
        }
    })

    $('.show-tab').on('click', function (e) {
        e.preventDefault();
        let target = $(this).attr('data-show-tab')
        $(target).tab('show')
    })


    $('[data-extra-toggle="delete"]').on('click', function (e) {
        const closestElem = $(this).attr('data-closest-elem')
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-primary',
                cancelButton: 'btn btn-outline-primary ml-2'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            showClass: {
                popup: 'animate__animated animate__zoomIn'
            },
            hideClass: {
                popup: 'animate__animated animate__zoomOut'
            }
        })
            .then((willDelete) => {
                if (willDelete.isConfirmed) {
                    const noteId = $(this).attr('data-note-id');
                    const deleteButton = this;
                    $.ajax({
                        url: '/notes/' + noteId + '/delete',
                        type: 'DELETE',
                        success: function (result) {
                            swalWithBootstrapButtons.fire({
                                    title: 'Deleted!',
                                    text: "Your note has been deleted.",
                                    icon: 'success',
                                    showClass: {
                                        popup: 'animate__animated animate__zoomIn'
                                    },
                                    hideClass: {
                                        popup: 'animate__animated animate__zoomOut'
                                    }
                                }
                            ).then(() => {
                                let closestElem2;
                                if (closestElem === '.card') {
                                    $('.my-notee[data-note-id="' + noteId + '"][data-closest-elem=".card"]').closest(closestElem).parent().remove();
                                    closestElem2 = 'tr';
                                    $('.my-notee[data-note-id="' + noteId + '"][data-closest-elem="tr"]').closest(closestElem2).remove();
                                } else {
                                    $('.my-notee[data-note-id="' + noteId + '"][data-closest-elem="tr"]').closest(closestElem).remove();
                                    closestElem2 = '.card';
                                    $('.my-notee[data-note-id="' + noteId + '"][data-closest-elem=".card"]').closest(closestElem2).parent().remove();
                                }
                                let allNotesGridView = $('#all-notes-grid-view');
                                let allNotesListView = $('#all-notes-list-view');
                                if (allNotesGridView.children().length === 1 || allNotesListView.children().length === 1) {
                                    $('.no-all-notes').show();
                                } else {
                                    $('.no-all-notes').hide();
                                }
                            })
                        },
                        error: function (xhr, status, error) {
                            swalWithBootstrapButtons.fire({
                                title: "Error, could not delete"
                            });
                        }
                    });
                } else {
                    swalWithBootstrapButtons.fire({
                        title: "Your note is safe!",
                        showClass: {
                            popup: 'animate__animated animate__zoomIn'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__zoomOut'
                        }
                    });
                }
            });
    })


    /*---------------------------------------------------------------------
        Tab right sidebar open close
    -----------------------------------------------------------------------*/

    $(document).on('click', '[data-extra-toggle="right-sidebar"]', function (e) {
        $(".right-sidebar-mini").removeClass("right-sidebar")
    })

    $(document).on('click', '[data-extra-toggle="right-sidebar-dissmiss"]', function (e) {
        $(".right-sidebar-mini").addClass("right-sidebar")
    })

    /*---------------------------------------------------------------------
        On Input change card update
    -----------------------------------------------------------------------*/

    $(document).on('click', '[data-change="click"]', function (e) {
        const group = $(this).closest('#icon-button')
        group.find('.active').removeClass('active')
        $(this).addClass('active')
        const value = $(this).html()
        const target = $(this).attr('data-custom-target')
        $(target).html(value)
    })

    $(document).on('change', '[data-change="radio"]', function (e) {
        const value = $(this).val()
        if ($(this).attr('data-custom-target') == 'color') {
            $('#note-icon').attr('class', ' ')
            $('#update-note').attr('class', ' ')
            $('#note-icon').addClass(`icon iq-icon-box-2 icon-border-${value} rounded`)
            $('#update-note').addClass(`card card-block card-stretch card-height card-bottom-border-${value} note-detail`)
        }
    })

    $(document).on('keyup', '[data-change="input"]', function () {
        const target = $(this).attr('data-custom-target')
        const value = $(this).val()
        const defaultValue = $(this).attr('placeholder')
        if ($(this).attr('type') !== 'date') {
            if (value !== '') {
                $(target).html(value)
            } else {
                $(target).html(defaultValue)
            }
        } else {
            $(target).html(changeDateString(value))
        }
    })

    $(document).on('change', '[data-change="input"]', function () {
        const target = $(this).attr('data-custom-target')
        if ($(this).attr('type') === 'date') {
            $(target).html(changeDateString($(this).val()))
        }
    })

    $(document).on('change', '[data-change="select"]', function (e) {
        const value = $(this).val()
        console.log('ts')
        if ($(this).attr('data-custom-target') == 'color') {
            $('#note-icon').attr('class', ' ')
            $('#update-note').attr('class', ' ')
            $('#note-icon').addClass(`icon iq-icon-box-2 icon-border-${value} rounded`)
            $('#update-note').addClass(`card card-block card-stretch card-height card-bottom-border-${value} note-detail`)
        }
    })

    function changeDateString(date) {
        const newDate = new Date(date)
        const month = new Array();
        month[0] = "Jan";
        month[1] = "Feb";
        month[2] = "Mar";
        month[3] = "Apr";
        month[4] = "May";
        month[5] = "Jun";
        month[6] = "Jul";
        month[7] = "Aug";
        month[8] = "Sept";
        month[9] = "Oct";
        month[10] = "Nov";
        month[11] = "Dec";
        return `${newDate.getDate()} ${month[newDate.getMonth()]} ${newDate.getFullYear()}`
    }

    $(document).on('click', '[data-reset="note-reset"]', function () {
        const group = $('#icon-button')
        group.find('.active').removeClass('active')
        $('#icon-button').first('button').addClass('active')
        $('#update-note').closest('#default').html($('.default-note').html())
    })

    $(document).on('click', '.edit-note', function () {
        $('#notebook-title').val($(this).closest('tr').find('[data-column]').text())
    })

})(jQuery);
