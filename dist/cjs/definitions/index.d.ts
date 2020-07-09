/**
 * @fileoverview 3D printer definitions
 *
 * **Note: If a print definition starts with a number, it will now start with an underscore. Hyphens have also been replaced by underscores.**
 *
 * The use of static ES6 module syntax allows for tree-shaking.
 *
 * See https://github.com/Ultimaker/Cura/tree/master/resources/definitions
 * for more information
 */
declare const _default: {
    _101Hero: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            supports_usb_connection: boolean;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_shape: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            speed_print: {
                default_value: number;
            };
            speed_travel: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            gantry_height: {
                value: string;
            };
            retraction_speed: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    _3dator: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            supports_usb_connection: boolean;
            platform: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            prime_tower_size: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_height: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_depth: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    _3dtech_semi_professional: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    abax_pri3: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
        };
    };
    abax_pri5: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
        };
    };
    abax_titan: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
        };
    };
    alfawise_u20: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            material_diameter: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            speed_print: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
            retraction_enable: {
                default_value: boolean;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
        };
    };
    alfawise_u30: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            material_diameter: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            speed_print: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
            retraction_enable: {
                default_value: boolean;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            gantry_height: {
                value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_max_acceleration_e: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_steps_per_mm_x: {
                default_value: number;
            };
            machine_steps_per_mm_y: {
                default_value: number;
            };
            machine_steps_per_mm_z: {
                default_value: number;
            };
            machine_steps_per_mm_e: {
                default_value: number;
            };
            skirt_line_count: {
                default_value: number;
            };
            skirt_brim_minimal_length: {
                default_value: number;
            };
        };
    };
    alya3dp: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            exclude_materials: string[];
            preferred_material: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            has_variants: boolean;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            adhesion_type: {
                options: {
                    raft: string;
                    none: string;
                    brim: string;
                };
                default_value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    alyanx3dp: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            exclude_materials: string[];
            preferred_material: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            has_variants: boolean;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            adhesion_type: {
                options: {
                    raft: string;
                    none: string;
                    brim: string;
                };
                default_value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anet3d: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            first_start_actions: string[];
            preferred_variant_name: string;
            preferred_quality_type: string;
            preferred_material: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_max_feedrate_x: {
                value: number;
            };
            machine_max_feedrate_y: {
                value: number;
            };
            machine_max_feedrate_z: {
                value: number;
            };
            machine_max_feedrate_e: {
                value: number;
            };
            machine_max_acceleration_x: {
                value: number;
            };
            machine_max_acceleration_y: {
                value: number;
            };
            machine_max_acceleration_z: {
                value: number;
            };
            machine_max_acceleration_e: {
                value: number;
            };
            machine_acceleration: {
                value: number;
            };
            machine_max_jerk_xy: {
                value: number;
            };
            machine_max_jerk_z: {
                value: number;
            };
            machine_max_jerk_e: {
                value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            material_diameter: {
                default_value: number;
            };
            acceleration_print: {
                value: number;
            };
            acceleration_travel: {
                value: number;
            };
            acceleration_travel_layer_0: {
                value: string;
            };
            acceleration_roofing: {
                enabled: string;
            };
            jerk_print: {
                value: number;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
            acceleration_enabled: {
                value: boolean;
            };
            jerk_enabled: {
                value: boolean;
            };
            speed_print: {
                value: number;
            };
            speed_infill: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_roofing: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_print_layer_0: {
                value: string;
            };
            speed_travel_layer_0: {
                value: string;
            };
            speed_prime_tower: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_z_hop: {
                value: number;
            };
            skirt_brim_speed: {
                value: string;
            };
            line_width: {
                value: string;
            };
            optimize_wall_printing_order: {
                value: boolean;
            };
            material_initial_print_temperature: {
                value: string;
            };
            material_final_print_temperature: {
                value: string;
            };
            material_flow: {
                value: number;
            };
            travel_compensate_overlapping_walls_0_enabled: {
                value: string;
            };
            z_seam_type: {
                value: string;
            };
            z_seam_corner: {
                value: string;
            };
            infill_sparse_density: {
                value: string;
            };
            infill_pattern: {
                value: string;
            };
            infill_before_walls: {
                value: boolean;
            };
            infill_overlap: {
                value: number;
            };
            skin_overlap: {
                value: number;
            };
            infill_wipe_dist: {
                value: number;
            };
            wall_0_wipe_dist: {
                value: number;
            };
            fill_perimeter_gaps: {
                value: string;
            };
            fill_outline_gaps: {
                value: boolean;
            };
            filter_out_tiny_gaps: {
                value: boolean;
            };
            retraction_speed: {
                maximum_value_warning: string;
                maximum_value: number;
            };
            retraction_retract_speed: {
                maximum_value_warning: string;
                maximum_value: number;
            };
            retraction_prime_speed: {
                maximum_value_warning: string;
                maximum_value: number;
            };
            retraction_hop_enabled: {
                value: string;
            };
            retraction_hop: {
                value: number;
            };
            retraction_combing: {
                value: string;
            };
            retraction_combing_max_distance: {
                value: number;
            };
            travel_avoid_other_parts: {
                value: boolean;
            };
            travel_avoid_supports: {
                value: boolean;
            };
            travel_retract_before_outer_wall: {
                value: boolean;
            };
            retraction_enable: {
                value: boolean;
            };
            retraction_count_max: {
                value: number;
            };
            retraction_extrusion_window: {
                value: number;
            };
            retraction_min_travel: {
                value: number;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_enabled: {
                value: boolean;
            };
            cool_min_layer_time: {
                value: number;
            };
            adaptive_layer_height_variation: {
                value: number;
            };
            adaptive_layer_height_variation_step: {
                value: number;
            };
            meshfix_maximum_resolution: {
                value: string;
            };
            meshfix_maximum_travel_resolution: {
                value: string;
            };
            top_bottom_thickness: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
            material_print_temperature: {
                minimum_value: string;
            };
            material_bed_temperature: {
                minimum_value: string;
            };
            material_standby_temperature: {
                minimum_value: string;
            };
            extruder_prime_pos_y: {
                minimum_value: string;
                maximum_value: string;
            };
            extruder_prime_pos_x: {
                minimum_value: string;
                maximum_value: string;
            };
            relative_extrusion: {
                value: boolean;
                enabled: boolean;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
        };
    };
    anet3d_a2: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anet3d_a2_plus: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anet3d_a6: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anet3d_a8: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anet3d_a8_plus: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anet3d_e10: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anet3d_e12: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anet3d_e16: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anet3d_et4: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anet3d_et4_pro: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anet3d_et4_x: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anet3d_et5: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anet3d_et5_x: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anycubic_4max: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            icon: string;
            platform: string;
            has_materials: boolean;
            quality_definition: string;
            has_machine_quality: boolean;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            jerk_enabled: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            gantry_height: {
                value: string;
            };
            skin_overlap: {
                value: string;
            };
            acceleration_enabled: {
                value: string;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            infill_pattern: {
                value: string;
            };
            infill_before_walls: {
                value: boolean;
            };
            adhesion_type: {
                default_value: string;
            };
            material_bed_temperature: {
                maximum_value: string;
            };
            material_bed_temperature_layer_0: {
                maximum_value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anycubic_chiron: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            icon: string;
            platform: string;
            platform_texture: string;
            has_materials: boolean;
            preferred_material: string;
            has_machine_quality: boolean;
            quality_definition: string;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
            firmware_file: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anycubic_i3_mega: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_materials: boolean;
            has_machine_quality: boolean;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    anycubic_mega_zero: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_materials: boolean;
            has_machine_quality: boolean;
            preferred_quality_type: string;
            preferred_material: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                value: number;
            };
            machine_max_feedrate_y: {
                value: number;
            };
            machine_max_feedrate_z: {
                value: number;
            };
            machine_max_feedrate_e: {
                value: number;
            };
            machine_max_acceleration_x: {
                value: number;
            };
            machine_max_acceleration_y: {
                value: number;
            };
            machine_max_acceleration_z: {
                value: number;
            };
            machine_max_acceleration_e: {
                value: number;
            };
            machine_acceleration: {
                value: number;
            };
            acceleration_print: {
                value: number;
            };
            acceleration_travel: {
                value: number;
            };
            acceleration_enabled: {
                value: boolean;
            };
            machine_max_jerk_xy: {
                value: number;
            };
            machine_max_jerk_z: {
                value: number;
            };
            machine_max_jerk_e: {
                value: number;
            };
            jerk_print: {
                value: number;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
            jerk_enabled: {
                value: boolean;
            };
            speed_print: {
                value: number;
            };
            speed_z_hop: {
                value: string;
            };
            optimize_wall_printing_order: {
                value: string;
            };
            material_initial_print_temperature: {
                value: string;
            };
            material_final_print_temperature: {
                value: string;
            };
            retraction_hop_enabled: {
                value: string;
            };
            retraction_hop: {
                value: number;
            };
            retraction_combing: {
                default_value: string;
            };
            retraction_combing_max_distance: {
                value: number;
            };
            travel_avoid_other_parts: {
                value: boolean;
            };
            travel_avoid_supports: {
                value: boolean;
            };
            travel_retract_before_outer_wall: {
                value: boolean;
            };
            retraction_enable: {
                value: boolean;
            };
            retraction_speed: {
                value: number;
            };
            retraction_amount: {
                value: number;
            };
            retraction_count_max: {
                value: number;
            };
            retraction_extrusion_window: {
                value: number;
            };
            retraction_min_travel: {
                value: number;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            adhesion_type: {
                value: string;
            };
            skirt_line_count: {
                default_value: number;
            };
            support_xy_distance: {
                value: string;
            };
            support_xy_distance_overhang: {
                value: string;
            };
            support_z_distance: {
                value: string;
            };
        };
    };
    atmat_asterion: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    atmat_asterion_ht: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            material_print_temperature: {
                maximum_value_warning: number;
            };
        };
    };
    atmat_galaxy_500: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
        };
    };
    atmat_galaxy_600: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
        };
    };
    atmat_signal_pro_300_v1: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
        };
    };
    atmat_signal_pro_300_v2: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    atmat_signal_pro_400_v1: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
        };
    };
    atmat_signal_pro_400_v2: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    atmat_signal_pro_500_v1: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
        };
    };
    atmat_signal_pro_500_v2: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    atmat_signal_pro_base: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            preferred_quality_type: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            has_variants: boolean;
            variants_name: string;
            preferred_variant_name: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            preferred_material: string;
            supports_usb_connection: boolean;
            supports_network_connection: boolean;
            exclude_materials: string[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            gantry_height: {
                value: number;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_heated_build_volume: {
                default_value: boolean;
            };
            build_volume_temperature: {
                maximum_value_warning: number;
            };
            material_print_temperature: {
                maximum_value_warning: number;
            };
            material_bed_temperature: {
                maximum_value_warning: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            adhesion_type: {
                default_value: string;
            };
            skirt_brim_minimal_length: {
                value: string;
            };
            retraction_amount: {
                value: string;
            };
            retraction_speed: {
                value: string;
                maximum_value_warning: string;
            };
            retraction_retract_speed: {
                value: string;
                maximum_value_warning: string;
            };
            retraction_prime_speed: {
                value: string;
                maximum_value_warning: string;
            };
            retraction_hop_enabled: {
                value: string;
            };
            retraction_hop: {
                value: string;
            };
            retraction_combing: {
                default_value: string;
            };
            retraction_combing_max_distance: {
                value: string;
            };
            travel_avoid_other_parts: {
                value: string;
            };
            travel_avoid_supports: {
                value: string;
            };
            speed_travel: {
                maximum_value: string;
                value: string;
                maximum_value_warning: string;
            };
            speed_travel_layer_0: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_roofing: {
                value: string;
            };
            speed_slowdown_layers: {
                value: string;
            };
            roofing_layer_count: {
                value: string;
            };
            optimize_wall_printing_order: {
                value: string;
            };
            infill_enable_travel_optimization: {
                value: string;
            };
            minimum_polygon_circumference: {
                value: string;
            };
            wall_overhang_angle: {
                value: string;
            };
            wall_overhang_speed_factor: {
                value: string;
            };
            bridge_settings_enabled: {
                value: string;
            };
            bridge_wall_coast: {
                value: string;
            };
            bridge_fan_speed: {
                value: string;
            };
            bridge_fan_speed_2: {
                resolve: string;
            };
            bridge_fan_speed_3: {
                resolve: string;
            };
            alternate_extra_perimeter: {
                value: string;
            };
            cool_min_layer_time_fan_speed_max: {
                value: string;
            };
            cool_min_layer_time: {
                value: string;
            };
            cool_fan_speed_min: {
                value: string;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_full_layer: {
                value: string;
            };
            layer_height_0: {
                resolve: string;
            };
            line_width: {
                value: string;
            };
            wall_line_width: {
                value: string;
            };
            fill_perimeter_gaps: {
                default_value: string;
            };
            fill_outline_gaps: {
                value: string;
            };
            meshfix_maximum_resolution: {
                value: string;
            };
            meshfix_maximum_deviation: {
                value: string;
            };
            infill_before_walls: {
                value: string;
            };
            zig_zaggify_infill: {
                value: string;
            };
            min_infill_area: {
                value: string;
            };
            acceleration_enabled: {
                value: string;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            jerk_enabled: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
            extruder_prime_pos_abs: {
                value: string;
            };
            switch_extruder_prime_speed: {
                value: string;
            };
            switch_extruder_retraction_amount: {
                value: string;
            };
            support_xy_distance: {
                value: string;
            };
            support_xy_distance_overhang: {
                value: string;
            };
            support_angle: {
                value: string;
            };
            support_bottom_distance: {
                value: string;
            };
            support_pattern: {
                default_value: string;
            };
            support_top_distance: {
                value: string;
            };
            support_use_towers: {
                value: string;
            };
            support_z_distance: {
                value: string;
            };
            support_interface_enable: {
                value: string;
            };
            support_interface_height: {
                value: string;
            };
            support_interface_skip_height: {
                value: string;
            };
            support_bottom_enable: {
                value: string;
            };
            support_join_distance: {
                value: string;
            };
            support_offset: {
                value: string;
            };
            support_infill_rate: {
                value: string;
            };
            support_brim_enable: {
                value: string;
            };
            prime_tower_enable: {
                value: string;
            };
        };
    };
    atmat_signal_xl: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_heated_build_volume: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
        };
    };
    atmat_signal_xxl: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_heated_build_volume: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
        };
    };
    atmat_signal_xxxl: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_heated_build_volume: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
        };
    };
    beamup_s: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            has_machine_quality: boolean;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    bfb: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            speed_print: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
            };
            prime_tower_size: {
                default_value: number;
            };
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_height: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
        };
    };
    bibo2_dual: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            first_start_actions: string[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            speed_print: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
        };
    };
    bq_hephestos: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
            firmware_file: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
        };
    };
    bq_hephestos_2: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            platform: string;
            platform_offset: number[];
            file_formats: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            skirt_line_count: {
                default_value: number;
            };
            skirt_brim_minimal_length: {
                default_value: number;
            };
            skirt_gap: {
                default_value: number;
            };
        };
    };
    bq_hephestos_xl: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            manufacturer: string;
            author: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
        };
    };
    bq_witbox: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
            firmware_file: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
        };
    };
    bq_witbox_2: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            skirt_line_count: {
                default_value: number;
            };
            skirt_brim_minimal_length: {
                default_value: number;
            };
            skirt_gap: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
        };
    };
    builder_premium_large: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            quality_definition: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            has_machine_quality: boolean;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            infill_pattern: {
                value: string;
            };
            infill_before_walls: {
                value: boolean;
            };
            default_material_print_temperature: {
                value: string;
            };
            material_print_temperature_layer_0: {
                value: string;
            };
            material_standby_temperature: {
                value: string;
            };
            switch_extruder_retraction_speeds: {
                default_value: number;
            };
            switch_extruder_retraction_amount: {
                value: number;
            };
            speed_travel: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_prime_tower: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
            prime_tower_wipe_enabled: {
                default_value: boolean;
            };
            prime_tower_min_volume: {
                default_value: number;
            };
            prime_blob_enable: {
                enabled: boolean;
            };
            acceleration_enabled: {
                value: string;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_min_layer_time: {
                default_value: number;
            };
            jerk_enabled: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            travel_retract_before_outer_wall: {
                default_value: boolean;
            };
            skin_overlap: {
                value: string;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
        };
    };
    builder_premium_medium: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            quality_definition: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            has_machine_quality: boolean;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            infill_pattern: {
                value: string;
            };
            infill_before_walls: {
                value: boolean;
            };
            default_material_print_temperature: {
                value: string;
            };
            material_print_temperature_layer_0: {
                value: string;
            };
            material_standby_temperature: {
                value: string;
            };
            switch_extruder_retraction_speeds: {
                default_value: number;
            };
            switch_extruder_retraction_amount: {
                value: number;
            };
            speed_travel: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_prime_tower: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
            prime_tower_wipe_enabled: {
                default_value: boolean;
            };
            prime_tower_min_volume: {
                default_value: number;
            };
            prime_blob_enable: {
                enabled: boolean;
            };
            acceleration_enabled: {
                value: string;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_min_layer_time: {
                default_value: number;
            };
            jerk_enabled: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            travel_retract_before_outer_wall: {
                default_value: boolean;
            };
            skin_overlap: {
                value: string;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
        };
    };
    builder_premium_small: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            has_machine_quality: boolean;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            infill_pattern: {
                value: string;
            };
            infill_before_walls: {
                value: boolean;
            };
            default_material_print_temperature: {
                value: string;
            };
            material_print_temperature_layer_0: {
                value: string;
            };
            material_standby_temperature: {
                value: string;
            };
            switch_extruder_retraction_speeds: {
                default_value: number;
            };
            switch_extruder_retraction_amount: {
                value: number;
            };
            speed_travel: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_prime_tower: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
            prime_tower_wipe_enabled: {
                default_value: boolean;
            };
            prime_tower_min_volume: {
                default_value: number;
            };
            prime_blob_enable: {
                enabled: boolean;
            };
            acceleration_enabled: {
                value: string;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_min_layer_time: {
                default_value: number;
            };
            jerk_enabled: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            travel_retract_before_outer_wall: {
                default_value: boolean;
            };
            skin_overlap: {
                value: string;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
        };
    };
    cartesio: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            has_variants: boolean;
            variants_name: string;
            preferred_variant_name: string;
            preferred_material: string;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
                1: string;
                2: string;
                3: string;
            };
            platform: string;
            platform_offset: number[];
            first_start_actions: string[];
            supported_actions: string[];
        };
        overrides: {
            machine_extruder_count: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            material_print_temp_wait: {
                default_value: boolean;
            };
            material_bed_temp_wait: {
                default_value: boolean;
            };
            prime_tower_enable: {
                default_value: boolean;
            };
            prime_tower_min_volume: {
                value: string;
            };
            prime_tower_size: {
                value: number;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
            prime_blob_enable: {
                default_value: boolean;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_disallowed_areas: {
                default_value: number[][][];
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            layer_height: {
                maximum_value: string;
            };
            layer_height_0: {
                maximum_value: string;
            };
            retraction_extra_prime_amount: {
                minimum_value_warning: string;
            };
            optimize_wall_printing_order: {
                default_value: boolean;
            };
            material_initial_print_temperature: {
                maximum_value_warning: string;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_min_cool_heat_time_window: {
                default_value: number;
            };
        };
    };
    cocoon_create_modelmaker: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            material_diameter: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
            retraction_enable: {
                default_value: boolean;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
        };
    };
    creality_base: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            first_start_actions: string[];
            machine_extruder_trains: {
                0: string;
            };
            has_materials: boolean;
            has_variants: boolean;
            has_machine_quality: boolean;
            variants_name: string;
            preferred_variant_name: string;
            preferred_quality_type: string;
            preferred_material: string;
            exclude_materials: string[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                value: number;
            };
            machine_max_feedrate_y: {
                value: number;
            };
            machine_max_feedrate_z: {
                value: number;
            };
            machine_max_feedrate_e: {
                value: number;
            };
            machine_max_acceleration_x: {
                value: number;
            };
            machine_max_acceleration_y: {
                value: number;
            };
            machine_max_acceleration_z: {
                value: number;
            };
            machine_max_acceleration_e: {
                value: number;
            };
            machine_acceleration: {
                value: number;
            };
            machine_max_jerk_xy: {
                value: number;
            };
            machine_max_jerk_z: {
                value: number;
            };
            machine_max_jerk_e: {
                value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            material_diameter: {
                default_value: number;
            };
            acceleration_print: {
                value: number;
            };
            acceleration_travel: {
                value: number;
            };
            acceleration_travel_layer_0: {
                value: string;
            };
            acceleration_roofing: {
                enabled: string;
            };
            jerk_print: {
                value: number;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
            acceleration_enabled: {
                value: boolean;
            };
            jerk_enabled: {
                value: boolean;
            };
            speed_print: {
                value: number;
            };
            speed_infill: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_roofing: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_layer_0: {
                value: number;
            };
            speed_print_layer_0: {
                value: string;
            };
            speed_travel_layer_0: {
                value: string;
            };
            speed_prime_tower: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_z_hop: {
                value: number;
            };
            skirt_brim_speed: {
                value: string;
            };
            line_width: {
                value: string;
            };
            optimize_wall_printing_order: {
                value: string;
            };
            material_initial_print_temperature: {
                value: string;
            };
            material_final_print_temperature: {
                value: string;
            };
            material_flow: {
                value: number;
            };
            travel_compensate_overlapping_walls_0_enabled: {
                value: string;
            };
            z_seam_type: {
                value: string;
            };
            z_seam_corner: {
                value: string;
            };
            infill_sparse_density: {
                value: string;
            };
            infill_pattern: {
                value: string;
            };
            infill_before_walls: {
                value: boolean;
            };
            infill_overlap: {
                value: number;
            };
            skin_overlap: {
                value: number;
            };
            infill_wipe_dist: {
                value: number;
            };
            wall_0_wipe_dist: {
                value: number;
            };
            fill_perimeter_gaps: {
                value: string;
            };
            fill_outline_gaps: {
                value: boolean;
            };
            filter_out_tiny_gaps: {
                value: boolean;
            };
            retraction_speed: {
                maximum_value_warning: string;
                maximum_value: number;
            };
            retraction_retract_speed: {
                maximum_value_warning: string;
                maximum_value: number;
            };
            retraction_prime_speed: {
                maximum_value_warning: string;
                maximum_value: number;
            };
            retraction_hop_enabled: {
                value: string;
            };
            retraction_hop: {
                value: number;
            };
            retraction_combing: {
                value: string;
            };
            retraction_combing_max_distance: {
                value: number;
            };
            travel_avoid_other_parts: {
                value: boolean;
            };
            travel_avoid_supports: {
                value: boolean;
            };
            travel_retract_before_outer_wall: {
                value: boolean;
            };
            retraction_enable: {
                value: boolean;
            };
            retraction_count_max: {
                value: number;
            };
            retraction_extrusion_window: {
                value: number;
            };
            retraction_min_travel: {
                value: number;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_enabled: {
                value: boolean;
            };
            cool_min_layer_time: {
                value: number;
            };
            adhesion_type: {
                value: string;
            };
            brim_replaces_support: {
                value: boolean;
            };
            skirt_gap: {
                value: number;
            };
            skirt_line_count: {
                value: number;
            };
            adaptive_layer_height_variation: {
                value: number;
            };
            adaptive_layer_height_variation_step: {
                value: number;
            };
            meshfix_maximum_resolution: {
                value: string;
            };
            meshfix_maximum_travel_resolution: {
                value: string;
            };
            support_angle: {
                value: string;
            };
            support_pattern: {
                value: string;
            };
            support_infill_rate: {
                value: string;
            };
            support_use_towers: {
                value: boolean;
            };
            support_xy_distance: {
                value: string;
            };
            support_xy_distance_overhang: {
                value: string;
            };
            support_z_distance: {
                value: string;
            };
            support_xy_overrides_z: {
                value: string;
            };
            support_wall_count: {
                value: number;
            };
            support_brim_enable: {
                value: boolean;
            };
            support_brim_width: {
                value: number;
            };
            support_interface_enable: {
                value: boolean;
            };
            support_interface_height: {
                value: string;
            };
            support_interface_density: {
                value: number;
            };
            support_interface_pattern: {
                value: string;
            };
            support_interface_skip_height: {
                value: number;
            };
            minimum_support_area: {
                value: number;
            };
            minimum_interface_area: {
                value: number;
            };
            top_bottom_thickness: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
        };
    };
    creality_cr_x: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_variants: boolean;
            has_machine_quality: boolean;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            gantry_height: {
                value: string;
            };
            speed_print: {
                default_value: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_max_acceleration_e: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
        };
    };
    creality_cr10: {
        name: string;
        version: number;
        inherits: string;
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
        };
        metadata: {
            quality_definition: string;
            visible: boolean;
        };
    };
    creality_cr10max: {
        name: string;
        version: number;
        inherits: string;
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
        };
        metadata: {
            quality_definition: string;
            visible: boolean;
        };
    };
    creality_cr10mini: {
        name: string;
        version: number;
        inherits: string;
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
        };
        metadata: {
            quality_definition: string;
            visible: boolean;
        };
    };
    creality_cr10s: {
        name: string;
        version: number;
        inherits: string;
        overrides: {
            machine_name: {
                default_value: string;
            };
        };
        metadata: {
            quality_definition: string;
        };
    };
    creality_cr10s4: {
        name: string;
        version: number;
        inherits: string;
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
        };
        metadata: {
            quality_definition: string;
            visible: boolean;
        };
    };
    creality_cr10s5: {
        name: string;
        version: number;
        inherits: string;
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
        };
        metadata: {
            quality_definition: string;
            visible: boolean;
        };
    };
    creality_cr10spro: {
        name: string;
        version: number;
        inherits: string;
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
        };
        metadata: {
            quality_definition: string;
            platform: string;
            platform_offset: number[];
        };
    };
    creality_cr20: {
        name: string;
        version: number;
        inherits: string;
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
        };
        metadata: {
            quality_definition: string;
            visible: boolean;
        };
    };
    creality_cr20pro: {
        name: string;
        version: number;
        inherits: string;
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
        };
        metadata: {
            quality_definition: string;
        };
    };
    creality_ender2: {
        name: string;
        version: number;
        inherits: string;
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
        };
        metadata: {
            quality_definition: string;
            visible: boolean;
        };
    };
    creality_ender3: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            quality_definition: string;
            visible: boolean;
            platform: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_disallowed_areas: {
                default_value: number[][][];
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_start_gcode: {
                default_value: string;
            };
            gantry_height: {
                value: number;
            };
        };
    };
    creality_ender3pro: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            quality_definition: string;
            visible: boolean;
            platform: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_start_gcode: {
                default_value: string;
            };
            gantry_height: {
                value: number;
            };
        };
    };
    creality_ender4: {
        name: string;
        version: number;
        inherits: string;
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            speed_print: {
                value: number;
            };
        };
        metadata: {
            quality_definition: string;
            visible: boolean;
        };
    };
    creality_ender5: {
        name: string;
        version: number;
        inherits: string;
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            speed_print: {
                value: number;
            };
        };
        metadata: {
            quality_definition: string;
            visible: boolean;
        };
    };
    creality_ender5plus: {
        name: string;
        version: number;
        inherits: string;
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            speed_print: {
                value: number;
            };
        };
        metadata: {
            quality_definition: string;
            visible: boolean;
        };
    };
    creatable_d3: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            icon: string;
            platform: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_shape: {
                default_value: string;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            gantry_height: {
                value: string;
            };
            layer_height: {
                default_value: number;
            };
            relative_extrusion: {
                value: string;
            };
            retraction_combing: {
                default_value: string;
            };
            retraction_hop_enabled: {
                default_value: boolean;
            };
            retraction_hop_only_when_collides: {
                default_value: boolean;
            };
            retraction_speed: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    cubicon_3dp_110f: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            material_bed_temp_wait: {
                default_value: boolean;
            };
        };
    };
    cubicon_3dp_210f: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            material_bed_temp_wait: {
                default_value: boolean;
            };
        };
    };
    cubicon_3dp_310f: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            material_bed_temp_wait: {
                default_value: boolean;
            };
        };
    };
    cubicon_common: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
        };
        overrides: {
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            travel_compensate_overlapping_walls_enabled: {
                default_value: boolean;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            top_bottom_pattern: {
                default_value: string;
            };
            fill_perimeter_gaps: {
                default_value: string;
            };
            infill_sparse_density: {
                default_value: number;
            };
            infill_before_walls: {
                default_value: boolean;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            bottom_thickness: {
                value: string;
            };
            material_flow_layer_0: {
                default_value: number;
            };
            max_skin_angle_for_expansion: {
                default_value: number;
            };
            skin_angles: {
                default_value: string;
            };
            coasting_volume: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            cool_min_layer_time_fan_speed_max: {
                default_value: number;
            };
            cool_min_layer_time: {
                default_value: number;
            };
            support_interface_pattern: {
                default_value: string;
            };
            support_pattern: {
                default_value: string;
            };
            retraction_amount: {
                default_value: number;
            };
        };
    };
    cubicon_dual_pro_a30: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            material_bed_temp_wait: {
                default_value: boolean;
            };
            machine_extruder_count: {
                default_value: number;
            };
        };
    };
    cubicon_style_plus_a15: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            material_bed_temp_wait: {
                default_value: boolean;
            };
        };
    };
    custom: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                7: string;
            };
            first_start_actions: string[];
        };
    };
    dagoma_delta: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
        };
        overrides: {
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_shape: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            default_material_print_temperature: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            skirt_line_count: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            top_bottom_thickness: {
                default_value: number;
            };
        };
    };
    dagoma_disco: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
        };
        overrides: {
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            default_material_print_temperature: {
                default_value: number;
            };
            material_standby_temperature: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            skirt_line_count: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            top_bottom_thickness: {
                default_value: number;
            };
        };
    };
    dagoma_discoeasy200: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            has_machine_quality: boolean;
            has_materials: boolean;
            preferred_material: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    dagoma_discoeasy200_bicolor: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            has_machine_quality: boolean;
            has_materials: boolean;
            preferred_material: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_extruders_share_heater: {
                default_value: boolean;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    dagoma_discoultimate: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            has_machine_quality: boolean;
            has_materials: boolean;
            preferred_material: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    dagoma_discoultimate_bicolor: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            has_machine_quality: boolean;
            has_materials: boolean;
            preferred_material: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_extruders_share_heater: {
                default_value: boolean;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    dagoma_magis: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            has_machine_quality: boolean;
            has_materials: boolean;
            preferred_material: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
        };
    };
    dagoma_neva: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            has_machine_quality: boolean;
            has_materials: boolean;
            preferred_material: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
        };
    };
    deltabot: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            prime_tower_size: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_height: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_depth: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            machine_name: {
                default_value: string;
            };
            machine_shape: {
                default_value: string;
            };
        };
    };
    deltacomb_base: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            visible: boolean;
            manufacturer: string;
            file_formats: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            has_variants: boolean;
            variants_name: string;
            preferred_quality_type: string;
            preferred_material: string;
            machine_extruder_trains: {
                0: string;
                1: string;
                2: string;
                3: string;
            };
        };
        overrides: {
            machine_extruder_count: {
                default_value: number;
                maximum_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_shape: {
                default_value: string;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            speed_topbottom: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_travel_layer_0: {
                value: string;
            };
            speed_z_hop: {
                value: string;
            };
            acceleration_enabled: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            jerk_enabled: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_infill: {
                value: string;
            };
            jerk_travel: {
                value: string;
            };
            retraction_hop_enabled: {
                default_value: boolean;
            };
            retraction_hop: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            retraction_combing: {
                default_value: string;
            };
            travel_avoid_distance: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            roofing_layer_count: {
                value: string;
            };
            roofing_line_width: {
                value: string;
            };
            infill_sparse_density: {
                default_value: number;
            };
            infill_pattern: {
                value: string;
            };
            infill_before_walls: {
                default_value: boolean;
            };
            support_z_distance: {
                value: string;
            };
            support_bottom_distance: {
                value: string;
            };
            support_use_towers: {
                default_value: boolean;
            };
            support_bottom_enable: {
                value: string;
            };
            skirt_brim_speed: {
                value: string;
            };
            skirt_line_count: {
                default_value: number;
            };
            skirt_brim_minimal_length: {
                default_value: number;
            };
            brim_width: {
                value: string;
            };
            prime_tower_size: {
                value: string;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
        };
    };
    deltacomb_dc20: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
            preferred_variant_name: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
                maximum_value: string;
            };
        };
    };
    deltacomb_dc20dual: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
            preferred_variant_name: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
                maximum_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    deltacomb_dc20flux: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
            preferred_variant_name: string;
            machine_extruder_trains: {
                0: string;
                1: string;
                2: string;
                3: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
                maximum_value: string;
            };
            switch_extruder_retraction_amount: {
                value: string;
            };
            prime_tower_min_volume: {
                value: string;
            };
            prime_tower_enable: {
                value: string;
            };
        };
    };
    deltacomb_dc21: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
            preferred_variant_name: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
                maximum_value: string;
            };
        };
    };
    deltacomb_dc21dual: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
            preferred_variant_name: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
                maximum_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    deltacomb_dc21flux: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
            preferred_variant_name: string;
            machine_extruder_trains: {
                0: string;
                1: string;
                2: string;
                3: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
                maximum_value: string;
            };
            switch_extruder_retraction_amount: {
                value: string;
            };
            prime_tower_min_volume: {
                value: string;
            };
            prime_tower_enable: {
                value: string;
            };
        };
    };
    deltacomb_dc30: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
            preferred_variant_name: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
                maximum_value: string;
            };
        };
    };
    deltacomb_dc30dual: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
            preferred_variant_name: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
                maximum_value: string;
            };
        };
    };
    deltacomb_dc30flux: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
            preferred_variant_name: string;
            machine_extruder_trains: {
                0: string;
                1: string;
                2: string;
                3: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
                maximum_value: string;
            };
            switch_extruder_retraction_amount: {
                value: string;
            };
            prime_tower_min_volume: {
                value: string;
            };
            prime_tower_enable: {
                value: string;
            };
        };
    };
    delta_go: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            default_material_print_temperature: {
                default_value: number;
            };
            prime_tower_size: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_height: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_depth: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            raft_airgap: {
                default_value: number;
            };
            retraction_hop_enabled: {
                value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            retraction_hop: {
                value: string;
            };
            retraction_hop_only_when_collides: {
                value: string;
            };
            brim_width: {
                value: string;
            };
            machine_shape: {
                default_value: string;
            };
        };
    };
    dxu: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            has_variants: boolean;
            has_materials: boolean;
            has_machine_materials: boolean;
            has_machine_quality: boolean;
            has_variant_materials: boolean;
            weight: number;
            file_formats: string;
            icon: string;
            platform: string;
            platform_texture: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            supported_actions: string[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_nozzle_size: {
                default_value: number;
            };
            material_diameter: {
                default_value: number;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_min_cool_heat_time_window: {
                default_value: number;
            };
            machine_show_variants: {
                default_value: boolean;
            };
            machine_nozzle_head_distance: {
                default_value: number;
            };
            machine_nozzle_expansion_angle: {
                default_value: number;
            };
            machine_heat_zone_length: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            speed_infill: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            layer_height_0: {
                value: string;
            };
            line_width: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            switch_extruder_retraction_amount: {
                value: string;
                enabled: boolean;
            };
            switch_extruder_retraction_speeds: {
                value: string;
                enabled: boolean;
            };
            switch_extruder_retraction_speed: {
                value: string;
                enabled: boolean;
            };
            switch_extruder_prime_speed: {
                value: string;
                enabled: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                value: string;
            };
            machine_end_gcode: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            extruder_prime_pos_abs: {
                default_value: boolean;
            };
            extruder_prime_pos_x: {
                default_value: number;
                enabled: boolean;
            };
            extruder_prime_pos_y: {
                default_value: number;
                enabled: boolean;
            };
            extruder_prime_pos_z: {
                default_value: number;
                enabled: boolean;
            };
            layer_start_x: {
                default_value: number;
                enabled: boolean;
            };
            layer_start_y: {
                default_value: number;
                enabled: boolean;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
            material_adhesion_tendency: {
                enabled: boolean;
            };
            machine_disallowed_areas: {
                default_value: number[][][];
            };
        };
    };
    dxu_dual: {
        version: number;
        name: string;
        inherits: string;
        overrides: {
            machine_start_gcode: {
                value: string;
            };
            machine_end_gcode: {
                value: string;
            };
            prime_tower_enable: {
                default_value: boolean;
            };
        };
    };
    easyarts_ares: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
        };
    };
    erzay3d: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_start_gcode: {
                default_value: string;
            };
            machine_shape: {
                default_value: string;
            };
            machine_name: {
                default_value: string;
            };
            machine_depth: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_nozzle_size: {
                default_value: number;
            };
            material_diameter: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            material_bed_temp_wait: {
                default_value: boolean;
            };
            material_print_temp_wait: {
                default_value: boolean;
            };
            material_print_temp_prepend: {
                default_value: boolean;
            };
            machine_buildplate_type: {
                default_value: string;
            };
            machine_nozzle_head_distance: {
                default_value: number;
            };
            machine_heat_zone_length: {
                default_value: number;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_max_acceleration_e: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_steps_per_mm_x: {
                default_value: number;
            };
            machine_steps_per_mm_y: {
                default_value: number;
            };
            machine_steps_per_mm_z: {
                default_value: number;
            };
            machine_steps_per_mm_e: {
                default_value: number;
            };
            machine_feeder_wheel_diameter: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            ironing_pattern: {
                default_value: string;
            };
            ironing_flow: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            default_material_print_temperature: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            speed_equalize_flow_enabled: {
                default_value: boolean;
            };
            speed_equalize_flow_max: {
                default_value: number;
            };
            acceleration_print: {
                default_value: number;
            };
            jerk_print: {
                default_value: number;
            };
            support_angle: {
                default_value: number;
            };
            support_brim_enable: {
                default_value: boolean;
            };
            adhesion_type: {
                default_value: string;
            };
            brim_outside_only: {
                default_value: boolean;
            };
            meshfix_maximum_resolution: {
                default_value: number;
            };
        };
    };
    fabtotum: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_machine_quality: boolean;
            has_variants: boolean;
            variants_name: string;
            preferred_variant_name: string;
            preferred_material: string;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            gantry_height: {
                value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_max_acceleration_e: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            retraction_hop_enabled: {
                default_value: boolean;
            };
            material_final_print_temperature: {
                value: string;
            };
            material_initial_print_temperature: {
                value: string;
            };
            travel_avoid_distance: {
                value: number;
            };
            speed_travel: {
                value: number;
            };
            speed_infill: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_travel_layer_0: {
                value: string;
            };
            skirt_brim_speed: {
                value: string;
            };
            skirt_line_count: {
                default_value: number;
            };
            skirt_brim_minimal_length: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            support_z_distance: {
                default_value: number;
                value: string;
            };
            support_interface_enable: {
                default_value: boolean;
            };
        };
    };
    fabxpro: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_materials: boolean;
            has_machine_quality: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                value: string;
            };
        };
    };
    fdmextruder: {
        name: string;
        version: number;
        metadata: {
            type: string;
            author: string;
            manufacturer: string;
            setting_version: number;
            visible: boolean;
            position: string;
        };
        settings: {
            machine_settings: {
                label: string;
                type: string;
                description: string;
                children: {
                    extruder_nr: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    machine_nozzle_id: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_nozzle_size: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_nozzle_offset_x: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    machine_nozzle_offset_y: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    machine_extruder_start_code: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    machine_extruder_start_pos_abs: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    machine_extruder_start_pos_x: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    machine_extruder_start_pos_y: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    machine_extruder_end_code: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    machine_extruder_end_pos_abs: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    machine_extruder_end_pos_x: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    machine_extruder_end_pos_y: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    extruder_prime_pos_z: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_extruder_cooling_fan_number: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                };
            };
            platform_adhesion: {
                label: string;
                type: string;
                icon: string;
                description: string;
                children: {
                    extruder_prime_pos_x: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        enabled: boolean;
                    };
                    extruder_prime_pos_y: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        enabled: boolean;
                    };
                };
            };
            material: {
                label: string;
                icon: string;
                description: string;
                type: string;
                children: {
                    material_diameter: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                };
            };
        };
    };
    fdmprinter: {
        name: string;
        version: number;
        metadata: {
            type: string;
            author: string;
            manufacturer: string;
            setting_version: number;
            file_formats: string;
            visible: boolean;
            has_materials: boolean;
            has_variants: boolean;
            has_machine_quality: boolean;
            preferred_material: string;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
            supports_usb_connection: boolean;
            supports_network_connection: boolean;
        };
        settings: {
            machine_settings: {
                label: string;
                type: string;
                description: string;
                icon: string;
                children: {
                    machine_name: {
                        label: string;
                        description: string;
                        default_value: string;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_show_variants: {
                        label: string;
                        description: string;
                        default_value: boolean;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_start_gcode: {
                        label: string;
                        description: string;
                        default_value: string;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_end_gcode: {
                        label: string;
                        description: string;
                        default_value: string;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    material_guid: {
                        label: string;
                        description: string;
                        default_value: string;
                        type: string;
                        enabled: boolean;
                    };
                    material_diameter: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_bed_temp_wait: {
                        label: string;
                        description: string;
                        default_value: boolean;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    material_print_temp_wait: {
                        label: string;
                        description: string;
                        default_value: boolean;
                        type: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    material_print_temp_prepend: {
                        label: string;
                        description: string;
                        default_value: boolean;
                        type: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    material_bed_temp_prepend: {
                        label: string;
                        description: string;
                        default_value: boolean;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_width: {
                        label: string;
                        description: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_depth: {
                        label: string;
                        description: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_shape: {
                        label: string;
                        description: string;
                        default_value: string;
                        type: string;
                        options: {
                            rectangular: string;
                            elliptic: string;
                        };
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_buildplate_type: {
                        label: string;
                        description: string;
                        default_value: string;
                        type: string;
                        options: {
                            glass: string;
                            aluminum: string;
                        };
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_height: {
                        label: string;
                        description: string;
                        default_value: number;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_heated_bed: {
                        label: string;
                        description: string;
                        default_value: boolean;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_heated_build_volume: {
                        label: string;
                        description: string;
                        default_value: boolean;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_always_write_active_tool: {
                        label: string;
                        description: string;
                        default_value: boolean;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_center_is_zero: {
                        label: string;
                        description: string;
                        default_value: boolean;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_extruder_count: {
                        label: string;
                        description: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value: string;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    extruders_enabled_count: {
                        label: string;
                        description: string;
                        value: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value: string;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_nozzle_tip_outer_diameter: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    machine_nozzle_head_distance: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_nozzle_expansion_angle: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        maximum_value: string;
                        minimum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_heat_zone_length: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_nozzle_temp_enabled: {
                        label: string;
                        description: string;
                        default_value: boolean;
                        value: string;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_nozzle_heat_up_speed: {
                        label: string;
                        description: string;
                        default_value: number;
                        unit: string;
                        type: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_nozzle_cool_down_speed: {
                        label: string;
                        description: string;
                        default_value: number;
                        unit: string;
                        type: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_min_cool_heat_time_window: {
                        label: string;
                        description: string;
                        default_value: number;
                        unit: string;
                        type: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_gcode_flavor: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            "RepRap (Marlin/Sprinter)": string;
                            "RepRap (Volumetric)": string;
                            "RepRap (RepRap)": string;
                            UltiGCode: string;
                            Griffin: string;
                            Makerbot: string;
                            BFB: string;
                            MACH3: string;
                            Repetier: string;
                        };
                        default_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_firmware_retract: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_extruders_share_heater: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_disallowed_areas: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: never[];
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    nozzle_disallowed_areas: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: never[];
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_head_with_fans_polygon: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number[][];
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    gantry_height: {
                        label: string;
                        description: string;
                        default_value: number;
                        value: string;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_nozzle_id: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_nozzle_size: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_use_extruder_offset_to_offset_coords: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    extruder_prime_pos_z: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    extruder_prime_pos_abs: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_max_feedrate_x: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_max_feedrate_y: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_max_feedrate_z: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_max_feedrate_e: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_max_acceleration_x: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_max_acceleration_y: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_max_acceleration_z: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_max_acceleration_e: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_acceleration: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_max_jerk_xy: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_max_jerk_z: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_max_jerk_e: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_steps_per_mm_x: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_steps_per_mm_y: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_steps_per_mm_z: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_steps_per_mm_e: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_endstop_positive_direction_x: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_endstop_positive_direction_y: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_endstop_positive_direction_z: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    machine_minimum_feedrate: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    machine_feeder_wheel_diameter: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                };
            };
            resolution: {
                label: string;
                type: string;
                icon: string;
                description: string;
                children: {
                    layer_height: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    layer_height_0: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        resolve: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    line_width: {
                        label: string;
                        description: string;
                        unit: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        default_value: number;
                        type: string;
                        value: string;
                        settable_per_mesh: boolean;
                        children: {
                            wall_line_width: {
                                label: string;
                                description: string;
                                unit: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                value: string;
                                default_value: number;
                                type: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                                children: {
                                    wall_line_width_0: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        maximum_value_warning: string;
                                        default_value: number;
                                        value: string;
                                        type: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                    };
                                    wall_line_width_x: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        maximum_value_warning: string;
                                        default_value: number;
                                        value: string;
                                        type: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                    };
                                };
                            };
                            skin_line_width: {
                                label: string;
                                description: string;
                                unit: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                default_value: number;
                                type: string;
                                value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            infill_line_width: {
                                label: string;
                                description: string;
                                unit: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                default_value: number;
                                type: string;
                                value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            skirt_brim_line_width: {
                                label: string;
                                description: string;
                                unit: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                default_value: number;
                                type: string;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                            support_line_width: {
                                label: string;
                                description: string;
                                unit: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                default_value: number;
                                type: string;
                                enabled: string;
                                value: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                            support_interface_line_width: {
                                label: string;
                                description: string;
                                unit: string;
                                default_value: number;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                type: string;
                                enabled: string;
                                limit_to_extruder: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                children: {
                                    support_roof_line_width: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        default_value: number;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        maximum_value_warning: string;
                                        type: string;
                                        enabled: string;
                                        limit_to_extruder: string;
                                        value: string;
                                        settable_per_mesh: boolean;
                                        settable_per_extruder: boolean;
                                    };
                                    support_bottom_line_width: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        default_value: number;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        maximum_value_warning: string;
                                        type: string;
                                        enabled: string;
                                        limit_to_extruder: string;
                                        value: string;
                                        settable_per_mesh: boolean;
                                        settable_per_extruder: boolean;
                                    };
                                };
                            };
                            prime_tower_line_width: {
                                label: string;
                                description: string;
                                type: string;
                                unit: string;
                                enabled: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                        };
                    };
                    initial_layer_line_width_factor: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                };
            };
            shell: {
                label: string;
                icon: string;
                description: string;
                type: string;
                children: {
                    wall_extruder_nr: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                        enabled: string;
                        children: {
                            wall_0_extruder_nr: {
                                label: string;
                                description: string;
                                type: string;
                                value: string;
                                default_value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                settable_per_meshgroup: boolean;
                                settable_globally: boolean;
                                enabled: string;
                            };
                            wall_x_extruder_nr: {
                                label: string;
                                description: string;
                                type: string;
                                value: string;
                                default_value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                settable_per_meshgroup: boolean;
                                settable_globally: boolean;
                                enabled: string;
                            };
                        };
                    };
                    wall_thickness: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        type: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        children: {
                            wall_line_count: {
                                label: string;
                                description: string;
                                default_value: number;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                type: string;
                                value: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    wall_0_wipe_dist: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    roofing_extruder_nr: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                        enabled: string;
                    };
                    roofing_layer_count: {
                        label: string;
                        description: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        type: string;
                        value: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        enabled: string;
                    };
                    top_bottom_extruder_nr: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                        enabled: string;
                    };
                    top_bottom_thickness: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value: string;
                        type: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        children: {
                            top_thickness: {
                                label: string;
                                description: string;
                                unit: string;
                                default_value: number;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value: string;
                                type: string;
                                value: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                                children: {
                                    top_layers: {
                                        label: string;
                                        description: string;
                                        default_value: number;
                                        minimum_value: string;
                                        maximum_value_warning: string;
                                        type: string;
                                        minimum_value_warning: string;
                                        value: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                    };
                                };
                            };
                            bottom_thickness: {
                                label: string;
                                description: string;
                                unit: string;
                                default_value: number;
                                minimum_value: string;
                                minimum_value_warning: string;
                                type: string;
                                value: string;
                                maximum_value: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                                children: {
                                    bottom_layers: {
                                        label: string;
                                        description: string;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        default_value: number;
                                        type: string;
                                        value: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                    };
                                    initial_bottom_layers: {
                                        label: string;
                                        description: string;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        default_value: number;
                                        type: string;
                                        value: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                    };
                                };
                            };
                        };
                    };
                    top_bottom_pattern: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            lines: string;
                            concentric: string;
                            zigzag: string;
                        };
                        default_value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    top_bottom_pattern_0: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            lines: string;
                            concentric: string;
                            zigzag: string;
                        };
                        default_value: string;
                        enabled: string;
                        value: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    connect_skin_polygons: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    skin_angles: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    wall_0_inset: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    optimize_wall_printing_order: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                    };
                    outer_inset_first: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    alternate_extra_perimeter: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    travel_compensate_overlapping_walls_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        children: {
                            travel_compensate_overlapping_walls_0_enabled: {
                                label: string;
                                description: string;
                                type: string;
                                default_value: boolean;
                                value: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            travel_compensate_overlapping_walls_x_enabled: {
                                label: string;
                                description: string;
                                type: string;
                                default_value: boolean;
                                value: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    wall_min_flow: {
                        label: string;
                        description: string;
                        unit: string;
                        minimum_value: string;
                        maximum_value: string;
                        default_value: number;
                        type: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    wall_min_flow_retract: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    fill_perimeter_gaps: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            nowhere: string;
                            everywhere: string;
                        };
                        default_value: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    filter_out_tiny_gaps: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    fill_outline_gaps: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    xy_offset: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        default_value: number;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    xy_offset_layer_0: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        default_value: number;
                        value: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    hole_xy_offset: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        default_value: number;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    z_seam_type: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            back: string;
                            shortest: string;
                            random: string;
                            sharpest_corner: string;
                        };
                        default_value: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    z_seam_position: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            backleft: string;
                            back: string;
                            backright: string;
                            right: string;
                            frontright: string;
                            front: string;
                            frontleft: string;
                            left: string;
                        };
                        enabled: string;
                        default_value: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        children: {
                            z_seam_x: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            z_seam_y: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    z_seam_corner: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            z_seam_corner_none: string;
                            z_seam_corner_inner: string;
                            z_seam_corner_outer: string;
                            z_seam_corner_any: string;
                            z_seam_corner_weighted: string;
                        };
                        default_value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    z_seam_relative: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    skin_no_small_gaps_heuristic: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    skin_outline_count: {
                        label: string;
                        description: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        type: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    ironing_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    ironing_only_highest_layer: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    ironing_pattern: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            concentric: string;
                            zigzag: string;
                        };
                        default_value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    ironing_line_spacing: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    ironing_flow: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    ironing_inset: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    speed_ironing: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    acceleration_ironing: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        default_value: number;
                        value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    jerk_ironing: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    skin_overlap: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        children: {
                            skin_overlap_mm: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                };
            };
            infill: {
                label: string;
                icon: string;
                description: string;
                type: string;
                children: {
                    infill_extruder_nr: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                        enabled: string;
                    };
                    infill_sparse_density: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        children: {
                            infill_line_distance: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                minimum_value_warning: string;
                                value: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    infill_pattern: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            grid: string;
                            lines: string;
                            triangles: string;
                            trihexagon: string;
                            cubic: string;
                            cubicsubdiv: string;
                            tetrahedral: string;
                            quarter_cubic: string;
                            concentric: string;
                            zigzag: string;
                            cross: string;
                            cross_3d: string;
                            gyroid: string;
                        };
                        default_value: string;
                        enabled: string;
                        value: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    zig_zaggify_infill: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    connect_infill_polygons: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    infill_angles: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    infill_offset_x: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    infill_offset_y: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    infill_randomize_start_location: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        warning_value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    infill_multiplier: {
                        label: string;
                        description: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    infill_wall_line_count: {
                        label: string;
                        description: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    sub_div_rad_add: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    infill_overlap: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        children: {
                            infill_overlap_mm: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    infill_wipe_dist: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    infill_sparse_thickness: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    gradual_infill_steps: {
                        label: string;
                        description: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    gradual_infill_step_height: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    infill_before_walls: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    min_infill_area: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        default_value: number;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    infill_support_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    infill_support_angle: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value: string;
                        default_value: number;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    skin_preshrink: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        children: {
                            top_skin_preshrink: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                maximum_value_warning: string;
                                minimum_value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            bottom_skin_preshrink: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                maximum_value_warning: string;
                                minimum_value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    expand_skins_expand_distance: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        children: {
                            top_skin_expand_distance: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            bottom_skin_expand_distance: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    max_skin_angle_for_expansion: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value: string;
                        default_value: number;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        children: {
                            min_skin_width_for_expansion: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    skin_edge_support_thickness: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value: string;
                        type: string;
                        value: string;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        children: {
                            skin_edge_support_layers: {
                                label: string;
                                description: string;
                                default_value: number;
                                minimum_value: string;
                                type: string;
                                value: string;
                                limit_to_extruder: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                };
            };
            material: {
                label: string;
                icon: string;
                description: string;
                type: string;
                children: {
                    default_material_print_temperature: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        enabled: boolean;
                        settable_per_extruder: boolean;
                        settable_per_mesh: boolean;
                        minimum_value: string;
                    };
                    build_volume_temperature: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        resolve: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_print_temperature: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_print_temperature_layer_0: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_initial_print_temperature: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_final_print_temperature: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_extrusion_cool_down_speed: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    default_material_bed_temperature: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        resolve: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        enabled: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    material_bed_temperature: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        resolve: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    material_bed_temperature_layer_0: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        resolve: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    material_adhesion_tendency: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value: string;
                        enabled: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_surface_energy: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value: string;
                        enabled: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_shrinkage_percentage: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value: string;
                        enabled: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_crystallinity: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_anti_ooze_retracted_position: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        enabled: boolean;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_anti_ooze_retraction_speed: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        enabled: boolean;
                        minimum_value: string;
                        maximum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_break_preparation_retracted_position: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        enabled: boolean;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_break_preparation_speed: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        enabled: boolean;
                        minimum_value: string;
                        maximum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_break_preparation_temperature: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        value: string;
                        enabled: boolean;
                        minimum_value: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_break_retracted_position: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        enabled: boolean;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_break_speed: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        enabled: boolean;
                        minimum_value: string;
                        maximum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_break_temperature: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        enabled: boolean;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_flush_purge_speed: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number;
                        enabled: boolean;
                    };
                    material_flush_purge_length: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number;
                        enabled: boolean;
                    };
                    material_end_of_filament_purge_speed: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number;
                        enabled: boolean;
                    };
                    material_end_of_filament_purge_length: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number;
                        enabled: boolean;
                    };
                    material_maximum_park_duration: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number;
                        enabled: boolean;
                    };
                    material_no_load_move_factor: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number;
                        enabled: boolean;
                    };
                    material_flow: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        children: {
                            wall_material_flow: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                                children: {
                                    wall_0_material_flow: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        default_value: number;
                                        value: string;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        maximum_value_warning: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                    };
                                    wall_x_material_flow: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        default_value: number;
                                        value: string;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        maximum_value_warning: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                    };
                                };
                            };
                            skin_material_flow: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            roofing_material_flow: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                                enabled: string;
                            };
                            infill_material_flow: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            skirt_brim_material_flow: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                            support_material_flow: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                            support_interface_material_flow: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                children: {
                                    support_roof_material_flow: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        default_value: number;
                                        value: string;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        maximum_value_warning: string;
                                        enabled: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                        settable_per_extruder: boolean;
                                    };
                                    support_bottom_material_flow: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        default_value: number;
                                        value: string;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        maximum_value_warning: string;
                                        enabled: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                        settable_per_extruder: boolean;
                                    };
                                };
                            };
                            prime_tower_flow: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                        };
                    };
                    material_flow_layer_0: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                    };
                    material_standby_temperature: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                };
            };
            speed: {
                label: string;
                icon: string;
                description: string;
                type: string;
                children: {
                    speed_print: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        children: {
                            speed_infill: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            speed_wall: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                settable_per_mesh: boolean;
                                children: {
                                    speed_wall_0: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        minimum_value: string;
                                        maximum_value: string;
                                        maximum_value_warning: string;
                                        default_value: number;
                                        value: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                    };
                                    speed_wall_x: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        minimum_value: string;
                                        maximum_value: string;
                                        maximum_value_warning: string;
                                        default_value: number;
                                        value: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                    };
                                };
                            };
                            speed_roofing: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                                enabled: string;
                            };
                            speed_topbottom: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                limit_to_extruder: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                            };
                            speed_support: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                limit_to_extruder: string;
                                settable_per_extruder: boolean;
                                children: {
                                    speed_support_infill: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        default_value: number;
                                        minimum_value: string;
                                        maximum_value: string;
                                        maximum_value_warning: string;
                                        value: string;
                                        enabled: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                        settable_per_extruder: boolean;
                                    };
                                    speed_support_interface: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        default_value: number;
                                        minimum_value: string;
                                        maximum_value: string;
                                        maximum_value_warning: string;
                                        enabled: string;
                                        limit_to_extruder: string;
                                        value: string;
                                        settable_per_mesh: boolean;
                                        settable_per_extruder: boolean;
                                        children: {
                                            speed_support_roof: {
                                                label: string;
                                                description: string;
                                                unit: string;
                                                type: string;
                                                default_value: number;
                                                minimum_value: string;
                                                maximum_value: string;
                                                maximum_value_warning: string;
                                                enabled: string;
                                                limit_to_extruder: string;
                                                value: string;
                                                settable_per_mesh: boolean;
                                                settable_per_extruder: boolean;
                                            };
                                            speed_support_bottom: {
                                                label: string;
                                                description: string;
                                                unit: string;
                                                type: string;
                                                default_value: number;
                                                minimum_value: string;
                                                maximum_value: string;
                                                maximum_value_warning: string;
                                                enabled: string;
                                                limit_to_extruder: string;
                                                value: string;
                                                settable_per_mesh: boolean;
                                                settable_per_extruder: boolean;
                                            };
                                        };
                                    };
                                };
                            };
                            speed_prime_tower: {
                                label: string;
                                description: string;
                                type: string;
                                unit: string;
                                enabled: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                        };
                    };
                    speed_travel: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    speed_layer_0: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        children: {
                            speed_print_layer_0: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                settable_per_mesh: boolean;
                            };
                            speed_travel_layer_0: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                settable_per_extruder: boolean;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    skirt_brim_speed: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    speed_z_hop: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    speed_slowdown_layers: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number;
                        resolve: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    speed_equalize_flow_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    speed_equalize_flow_max: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        enabled: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    acceleration_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        resolve: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    acceleration_print: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        default_value: number;
                        enabled: string;
                        settable_per_mesh: boolean;
                        children: {
                            acceleration_infill: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            acceleration_wall: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                children: {
                                    acceleration_wall_0: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        maximum_value_warning: string;
                                        default_value: number;
                                        value: string;
                                        enabled: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                    };
                                    acceleration_wall_x: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        maximum_value_warning: string;
                                        default_value: number;
                                        value: string;
                                        enabled: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                    };
                                };
                            };
                            acceleration_roofing: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            acceleration_topbottom: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            acceleration_support: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                limit_to_extruder: string;
                                settable_per_extruder: boolean;
                                children: {
                                    acceleration_support_infill: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        default_value: number;
                                        value: string;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        maximum_value_warning: string;
                                        enabled: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                        settable_per_extruder: boolean;
                                    };
                                    acceleration_support_interface: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        default_value: number;
                                        value: string;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        maximum_value_warning: string;
                                        enabled: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                        settable_per_extruder: boolean;
                                        children: {
                                            acceleration_support_roof: {
                                                label: string;
                                                description: string;
                                                unit: string;
                                                type: string;
                                                default_value: number;
                                                value: string;
                                                minimum_value: string;
                                                minimum_value_warning: string;
                                                maximum_value_warning: string;
                                                enabled: string;
                                                limit_to_extruder: string;
                                                settable_per_mesh: boolean;
                                                settable_per_extruder: boolean;
                                            };
                                            acceleration_support_bottom: {
                                                label: string;
                                                description: string;
                                                unit: string;
                                                type: string;
                                                default_value: number;
                                                value: string;
                                                minimum_value: string;
                                                minimum_value_warning: string;
                                                maximum_value_warning: string;
                                                enabled: string;
                                                limit_to_extruder: string;
                                                settable_per_mesh: boolean;
                                                settable_per_extruder: boolean;
                                            };
                                        };
                                    };
                                };
                            };
                            acceleration_prime_tower: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    acceleration_travel: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    acceleration_layer_0: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        children: {
                            acceleration_print_layer_0: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                            };
                            acceleration_travel_layer_0: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                settable_per_extruder: boolean;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    acceleration_skirt_brim: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        limit_to_extruder: string;
                    };
                    jerk_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        resolve: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    jerk_print: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        enabled: string;
                        settable_per_mesh: boolean;
                        children: {
                            jerk_infill: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            jerk_wall: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                children: {
                                    jerk_wall_0: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        minimum_value: string;
                                        maximum_value_warning: string;
                                        default_value: number;
                                        value: string;
                                        enabled: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                    };
                                    jerk_wall_x: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        minimum_value: string;
                                        maximum_value_warning: string;
                                        default_value: number;
                                        value: string;
                                        enabled: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                    };
                                };
                            };
                            jerk_roofing: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            jerk_topbottom: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            jerk_support: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                limit_to_extruder: string;
                                children: {
                                    jerk_support_infill: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        default_value: number;
                                        value: string;
                                        minimum_value: string;
                                        maximum_value_warning: string;
                                        enabled: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                        settable_per_extruder: boolean;
                                    };
                                    jerk_support_interface: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        default_value: number;
                                        value: string;
                                        minimum_value: string;
                                        maximum_value_warning: string;
                                        enabled: string;
                                        limit_to_extruder: string;
                                        settable_per_mesh: boolean;
                                        settable_per_extruder: boolean;
                                        children: {
                                            jerk_support_roof: {
                                                label: string;
                                                description: string;
                                                unit: string;
                                                type: string;
                                                default_value: number;
                                                value: string;
                                                minimum_value: string;
                                                maximum_value_warning: string;
                                                enabled: string;
                                                limit_to_extruder: string;
                                                settable_per_mesh: boolean;
                                                settable_per_extruder: boolean;
                                            };
                                            jerk_support_bottom: {
                                                label: string;
                                                description: string;
                                                unit: string;
                                                type: string;
                                                default_value: number;
                                                value: string;
                                                minimum_value: string;
                                                maximum_value_warning: string;
                                                enabled: string;
                                                limit_to_extruder: string;
                                                settable_per_mesh: boolean;
                                                settable_per_extruder: boolean;
                                            };
                                        };
                                    };
                                };
                            };
                            jerk_prime_tower: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    jerk_travel: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    jerk_layer_0: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        children: {
                            jerk_print_layer_0: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                maximum_value_warning: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                            };
                            jerk_travel_layer_0: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                maximum_value_warning: string;
                                enabled: string;
                                settable_per_extruder: boolean;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    jerk_skirt_brim: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        limit_to_extruder: string;
                    };
                };
            };
            travel: {
                label: string;
                icon: string;
                description: string;
                type: string;
                children: {
                    retraction_enable: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    retract_at_layer_change: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    retraction_amount: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    retraction_speed: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        children: {
                            retraction_retract_speed: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                            retraction_prime_speed: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                        };
                    };
                    retraction_extra_prime_amount: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    retraction_min_travel: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    retraction_count_max: {
                        label: string;
                        description: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        type: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    retraction_extrusion_window: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    limit_support_retractions: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    retraction_combing: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            off: string;
                            all: string;
                            noskin: string;
                            infill: string;
                        };
                        default_value: string;
                        resolve: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    retraction_combing_max_distance: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    travel_retract_before_outer_wall: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    travel_avoid_other_parts: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    travel_avoid_supports: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    travel_avoid_distance: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    layer_start_x: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    layer_start_y: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    retraction_hop_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    retraction_hop_only_when_collides: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    retraction_hop: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    retraction_hop_after_extruder_switch: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    retraction_hop_after_extruder_switch_height: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                };
            };
            cooling: {
                label: string;
                icon: string;
                description: string;
                type: string;
                children: {
                    cool_fan_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    cool_fan_speed: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        default_value: number;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        children: {
                            cool_fan_speed_min: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value: string;
                                value: string;
                                default_value: number;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                            cool_fan_speed_max: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value: string;
                                default_value: number;
                                enabled: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                        };
                    };
                    cool_min_layer_time_fan_speed_max: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    cool_fan_speed_0: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        default_value: number;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    cool_fan_full_at_height: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        children: {
                            cool_fan_full_layer: {
                                label: string;
                                description: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value_warning: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                        };
                    };
                    cool_min_layer_time: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    cool_min_speed: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    cool_lift_head: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                };
            };
            support: {
                label: string;
                type: string;
                icon: string;
                description: string;
                children: {
                    support_enable: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    support_extruder_nr: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        children: {
                            support_infill_extruder_nr: {
                                label: string;
                                description: string;
                                type: string;
                                default_value: string;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                            support_extruder_nr_layer_0: {
                                label: string;
                                description: string;
                                type: string;
                                default_value: string;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                            support_interface_extruder_nr: {
                                label: string;
                                description: string;
                                type: string;
                                default_value: string;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                children: {
                                    support_roof_extruder_nr: {
                                        label: string;
                                        description: string;
                                        type: string;
                                        default_value: string;
                                        value: string;
                                        enabled: string;
                                        settable_per_mesh: boolean;
                                        settable_per_extruder: boolean;
                                    };
                                    support_bottom_extruder_nr: {
                                        label: string;
                                        description: string;
                                        type: string;
                                        default_value: string;
                                        value: string;
                                        enabled: string;
                                        settable_per_mesh: boolean;
                                        settable_per_extruder: boolean;
                                    };
                                };
                            };
                        };
                    };
                    support_type: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            buildplate: string;
                            everywhere: string;
                        };
                        default_value: string;
                        resolve: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    support_angle: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_pattern: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            lines: string;
                            grid: string;
                            triangles: string;
                            concentric: string;
                            zigzag: string;
                            cross: string;
                            gyroid: string;
                        };
                        default_value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    support_wall_count: {
                        label: string;
                        description: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        type: string;
                        value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    zig_zaggify_support: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    support_connect_zigzags: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    support_infill_rate: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        children: {
                            support_line_distance: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                default_value: number;
                                enabled: string;
                                value: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                            support_initial_layer_line_distance: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                default_value: number;
                                enabled: string;
                                value: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                        };
                    };
                    support_infill_angles: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    support_brim_enable: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    support_brim_width: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                        children: {
                            support_brim_line_count: {
                                label: string;
                                description: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value_warning: string;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                limit_to_extruder: string;
                            };
                        };
                    };
                    support_z_distance: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        children: {
                            support_top_distance: {
                                label: string;
                                description: string;
                                unit: string;
                                minimum_value: string;
                                maximum_value_warning: string;
                                default_value: number;
                                type: string;
                                enabled: string;
                                value: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                            support_bottom_distance: {
                                label: string;
                                description: string;
                                unit: string;
                                minimum_value: string;
                                maximum_value_warning: string;
                                default_value: number;
                                value: string;
                                limit_to_extruder: string;
                                type: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    support_xy_distance: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_xy_overrides_z: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            xy_overrides_z: string;
                            z_overrides_xy: string;
                        };
                        default_value: string;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_xy_distance_overhang: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        default_value: number;
                        value: string;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_bottom_stair_step_height: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        limit_to_extruder: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_bottom_stair_step_width: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        limit_to_extruder: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_join_distance: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        limit_to_extruder: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_offset: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        limit_to_extruder: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_infill_sparse_thickness: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    gradual_support_infill_steps: {
                        label: string;
                        description: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    gradual_support_infill_step_height: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    minimum_support_area: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    support_interface_enable: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        children: {
                            support_roof_enable: {
                                label: string;
                                description: string;
                                type: string;
                                default_value: boolean;
                                value: string;
                                limit_to_extruder: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                            };
                            support_bottom_enable: {
                                label: string;
                                description: string;
                                type: string;
                                default_value: boolean;
                                value: string;
                                limit_to_extruder: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    support_interface_height: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        children: {
                            support_roof_height: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                value: string;
                                limit_to_extruder: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                            };
                            support_bottom_height: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                limit_to_extruder: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    support_interface_skip_height: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_interface_density: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        children: {
                            support_roof_density: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value: string;
                                limit_to_extruder: string;
                                enabled: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                children: {
                                    support_roof_line_distance: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        default_value: number;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        value: string;
                                        limit_to_extruder: string;
                                        enabled: string;
                                        settable_per_mesh: boolean;
                                        settable_per_extruder: boolean;
                                    };
                                };
                            };
                            support_bottom_density: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value: string;
                                limit_to_extruder: string;
                                enabled: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                children: {
                                    support_bottom_line_distance: {
                                        label: string;
                                        description: string;
                                        unit: string;
                                        type: string;
                                        default_value: number;
                                        minimum_value: string;
                                        minimum_value_warning: string;
                                        value: string;
                                        limit_to_extruder: string;
                                        enabled: string;
                                        settable_per_mesh: boolean;
                                        settable_per_extruder: boolean;
                                    };
                                };
                            };
                        };
                    };
                    support_interface_pattern: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            lines: string;
                            grid: string;
                            triangles: string;
                            concentric: string;
                            zigzag: string;
                        };
                        default_value: string;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        children: {
                            support_roof_pattern: {
                                label: string;
                                description: string;
                                type: string;
                                options: {
                                    lines: string;
                                    grid: string;
                                    triangles: string;
                                    concentric: string;
                                    zigzag: string;
                                };
                                default_value: string;
                                value: string;
                                limit_to_extruder: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                            support_bottom_pattern: {
                                label: string;
                                description: string;
                                type: string;
                                options: {
                                    lines: string;
                                    grid: string;
                                    triangles: string;
                                    concentric: string;
                                    zigzag: string;
                                };
                                default_value: string;
                                value: string;
                                limit_to_extruder: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                        };
                    };
                    minimum_interface_area: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        children: {
                            minimum_roof_area: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                limit_to_extruder: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                            };
                            minimum_bottom_area: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                limit_to_extruder: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    support_interface_offset: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        maximum_value: string;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        children: {
                            support_roof_offset: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                maximum_value: string;
                                limit_to_extruder: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                            support_bottom_offset: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                maximum_value: string;
                                limit_to_extruder: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                        };
                    };
                    support_interface_angles: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        children: {
                            support_roof_angles: {
                                label: string;
                                description: string;
                                type: string;
                                default_value: string;
                                value: string;
                                limit_to_extruder: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                            support_bottom_angles: {
                                label: string;
                                description: string;
                                type: string;
                                default_value: string;
                                value: string;
                                limit_to_extruder: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                        };
                    };
                    support_fan_enable: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_supported_skin_fan_speed: {
                        label: string;
                        description: string;
                        unit: string;
                        minimum_value: string;
                        maximum_value: string;
                        default_value: number;
                        type: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_use_towers: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_tower_diameter: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        limit_to_extruder: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_tower_maximum_supported_diameter: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        limit_to_extruder: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_tower_roof_angle: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        default_value: number;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_mesh_drop_down: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    support_meshes_present: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                };
            };
            platform_adhesion: {
                label: string;
                type: string;
                icon: string;
                description: string;
                children: {
                    prime_blob_enable: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        enabled: boolean;
                        warning_value: string;
                    };
                    extruder_prime_pos_x: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        enabled: boolean;
                    };
                    extruder_prime_pos_y: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        enabled: boolean;
                    };
                    adhesion_type: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            skirt: string;
                            brim: string;
                            raft: string;
                            none: string;
                        };
                        default_value: string;
                        resolve: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    adhesion_extruder_nr: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    skirt_line_count: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    skirt_gap: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    skirt_brim_minimal_length: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    brim_width: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                        children: {
                            brim_line_count: {
                                label: string;
                                description: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value_warning: string;
                                maximum_value: string;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                limit_to_extruder: string;
                            };
                        };
                    };
                    brim_gap: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    brim_replaces_support: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    brim_outside_only: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    raft_margin: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    raft_smoothing: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    raft_airgap: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    layer_0_z_overlap: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    raft_surface_layers: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    raft_surface_thickness: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    raft_surface_line_width: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    raft_surface_line_spacing: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    raft_interface_thickness: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    raft_interface_line_width: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    raft_interface_line_spacing: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    raft_base_thickness: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    raft_base_line_width: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    raft_base_line_spacing: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                    };
                    raft_speed: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        limit_to_extruder: string;
                        children: {
                            raft_surface_speed: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                enabled: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                limit_to_extruder: string;
                            };
                            raft_interface_speed: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                limit_to_extruder: string;
                            };
                            raft_base_speed: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                enabled: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                limit_to_extruder: string;
                            };
                        };
                    };
                    raft_acceleration: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        limit_to_extruder: string;
                        children: {
                            raft_surface_acceleration: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                limit_to_extruder: string;
                            };
                            raft_interface_acceleration: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                limit_to_extruder: string;
                            };
                            raft_base_acceleration: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                limit_to_extruder: string;
                            };
                        };
                    };
                    raft_jerk: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        limit_to_extruder: string;
                        children: {
                            raft_surface_jerk: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                limit_to_extruder: string;
                            };
                            raft_interface_jerk: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                limit_to_extruder: string;
                            };
                            raft_base_jerk: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                limit_to_extruder: string;
                            };
                        };
                    };
                    raft_fan_speed: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        enabled: string;
                        limit_to_extruder: string;
                        children: {
                            raft_surface_fan_speed: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                limit_to_extruder: string;
                            };
                            raft_interface_fan_speed: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                limit_to_extruder: string;
                            };
                            raft_base_fan_speed: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                maximum_value: string;
                                default_value: number;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                limit_to_extruder: string;
                            };
                        };
                    };
                };
            };
            dual: {
                label: string;
                type: string;
                icon: string;
                description: string;
                children: {
                    prime_tower_enable: {
                        label: string;
                        description: string;
                        type: string;
                        enabled: string;
                        default_value: boolean;
                        resolve: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    prime_tower_size: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        enabled: string;
                        default_value: number;
                        resolve: string;
                        minimum_value: string;
                        maximum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    prime_tower_min_volume: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    prime_tower_position_x: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        enabled: string;
                        default_value: number;
                        value: string;
                        maximum_value: string;
                        minimum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    prime_tower_position_y: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        enabled: string;
                        default_value: number;
                        value: string;
                        maximum_value: string;
                        minimum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    prime_tower_wipe_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        enabled: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    prime_tower_brim_enable: {
                        label: string;
                        description: string;
                        type: string;
                        enabled: string;
                        resolve: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    ooze_shield_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        resolve: string;
                        enabled: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    ooze_shield_angle: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        enabled: string;
                        default_value: number;
                        resolve: string;
                        minimum_value: string;
                        maximum_value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    ooze_shield_dist: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        enabled: string;
                        default_value: number;
                        resolve: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    switch_extruder_retraction_amount: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        enabled: string;
                        default_value: number;
                        value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    switch_extruder_retraction_speeds: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        enabled: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        children: {
                            switch_extruder_retraction_speed: {
                                label: string;
                                description: string;
                                type: string;
                                unit: string;
                                enabled: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                            switch_extruder_prime_speed: {
                                label: string;
                                description: string;
                                type: string;
                                unit: string;
                                enabled: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                        };
                    };
                    switch_extruder_extra_prime_amount: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                };
            };
            meshfix: {
                label: string;
                type: string;
                icon: string;
                description: string;
                children: {
                    meshfix_union_all: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        value: string;
                        settable_per_mesh: boolean;
                    };
                    meshfix_union_all_remove_holes: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                    };
                    meshfix_extensive_stitching: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                    };
                    meshfix_keep_open_polygons: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                    };
                    multiple_mesh_overlap: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    carve_multiple_volumes: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    alternate_carve_order: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    remove_empty_first_layers: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    meshfix_maximum_resolution: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                    };
                    meshfix_maximum_travel_resolution: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    meshfix_maximum_deviation: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                    };
                };
            };
            blackmagic: {
                label: string;
                type: string;
                icon: string;
                description: string;
                children: {
                    print_sequence: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            all_at_once: string;
                            one_at_a_time: string;
                        };
                        default_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    infill_mesh: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    infill_mesh_order: {
                        label: string;
                        description: string;
                        default_value: number;
                        value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    cutting_mesh: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    mold_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                    };
                    mold_width: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        enabled: string;
                    };
                    mold_roof_height: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        enabled: string;
                    };
                    mold_angle: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        enabled: string;
                    };
                    support_mesh: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    anti_overhang_mesh: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        settable_globally: boolean;
                    };
                    magic_mesh_surface_mode: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            normal: string;
                            surface: string;
                            both: string;
                        };
                        default_value: string;
                        settable_per_mesh: boolean;
                    };
                    magic_spiralize: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    smooth_spiralized_contours: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    relative_extrusion: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                };
            };
            experimental: {
                label: string;
                type: string;
                icon: string;
                description: string;
                children: {
                    support_tree_enable: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    support_tree_angle: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    support_tree_branch_distance: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        default_value: number;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    support_tree_branch_diameter: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        default_value: number;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    support_tree_branch_diameter_angle: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    support_tree_collision_resolution: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        default_value: number;
                        value: string;
                        limit_to_extruder: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    slicing_tolerance: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            middle: string;
                            exclusive: string;
                            inclusive: string;
                        };
                        default_value: string;
                        settable_per_mesh: boolean;
                    };
                    roofing_line_width: {
                        label: string;
                        description: string;
                        unit: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        default_value: number;
                        type: string;
                        value: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        enabled: string;
                    };
                    roofing_pattern: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            lines: string;
                            concentric: string;
                            zigzag: string;
                        };
                        default_value: string;
                        value: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        enabled: string;
                    };
                    roofing_angles: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    infill_enable_travel_optimization: {
                        label: string;
                        description: string;
                        type: string;
                        enabled: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                    };
                    material_flow_dependent_temperature: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    material_flow_temp_graph: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    minimum_polygon_circumference: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    support_skip_some_zags: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    support_skip_zag_per_mm: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        children: {
                            support_zag_skip_count: {
                                label: string;
                                description: string;
                                type: string;
                                default_value: number;
                                value: string;
                                minimum_value: string;
                                minimum_value_warning: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                        };
                    };
                    draft_shield_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    draft_shield_dist: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        resolve: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    draft_shield_height_limitation: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            full: string;
                            limited: string;
                        };
                        default_value: string;
                        resolve: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    draft_shield_height: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    conical_overhang_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                    };
                    conical_overhang_angle: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value: string;
                        default_value: number;
                        enabled: string;
                    };
                    coasting_enable: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    coasting_volume: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    coasting_min_volume: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    coasting_speed: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    cross_infill_pocket_size: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    cross_infill_density_image: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    cross_support_density_image: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    spaghetti_infill_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    spaghetti_infill_stepped: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    spaghetti_max_infill_angle: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    spaghetti_max_height: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    spaghetti_inset: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    spaghetti_flow: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    spaghetti_infill_extra_volume: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    support_conical_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    support_conical_angle: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        default_value: number;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    support_conical_min_width: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        type: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    magic_fuzzy_skin_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    magic_fuzzy_skin_outside_only: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    magic_fuzzy_skin_thickness: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                    };
                    magic_fuzzy_skin_point_density: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        maximum_value: string;
                        enabled: string;
                        limit_to_extruder: string;
                        settable_per_mesh: boolean;
                        children: {
                            magic_fuzzy_skin_point_dist: {
                                label: string;
                                description: string;
                                type: string;
                                unit: string;
                                default_value: number;
                                minimum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                value: string;
                                enabled: string;
                                limit_to_extruder: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    flow_rate_max_extrusion_offset: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    flow_rate_extrusion_offset_factor: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_height: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_roof_inset: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        value: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_printspeed: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        children: {
                            wireframe_printspeed_bottom: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                enabled: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                settable_per_meshgroup: boolean;
                            };
                            wireframe_printspeed_up: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                enabled: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                settable_per_meshgroup: boolean;
                            };
                            wireframe_printspeed_down: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                enabled: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                settable_per_meshgroup: boolean;
                            };
                            wireframe_printspeed_flat: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value: string;
                                maximum_value_warning: string;
                                value: string;
                                enabled: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                settable_per_meshgroup: boolean;
                            };
                        };
                    };
                    wireframe_flow: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        type: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                        children: {
                            wireframe_flow_connection: {
                                label: string;
                                description: string;
                                unit: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value_warning: string;
                                type: string;
                                enabled: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                settable_per_meshgroup: boolean;
                            };
                            wireframe_flow_flat: {
                                label: string;
                                description: string;
                                unit: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value_warning: string;
                                type: string;
                                enabled: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                                settable_per_meshgroup: boolean;
                            };
                        };
                    };
                    wireframe_top_delay: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_bottom_delay: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_flat_delay: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_up_half_speed: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_top_jump: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_fall_down: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_drag_along: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_strategy: {
                        label: string;
                        description: string;
                        type: string;
                        options: {
                            compensate: string;
                            knot: string;
                            retract: string;
                        };
                        default_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_straight_before_down: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_roof_fall_down: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_roof_drag_along: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_roof_outer_delay: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wireframe_nozzle_clearance: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    adaptive_layer_height_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    adaptive_layer_height_variation: {
                        label: string;
                        description: string;
                        type: string;
                        enabled: string;
                        unit: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    adaptive_layer_height_variation_step: {
                        label: string;
                        description: string;
                        type: string;
                        enabled: string;
                        default_value: number;
                        unit: string;
                        settable_per_mesh: boolean;
                        minimum_value: string;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    adaptive_layer_height_threshold: {
                        label: string;
                        description: string;
                        type: string;
                        enabled: string;
                        default_value: number;
                        unit: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wall_overhang_angle: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                    };
                    wall_overhang_speed_factor: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_settings_enabled: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    bridge_wall_min_length: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        default_value: number;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    bridge_skin_support_threshold: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_sparse_infill_max_density: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_wall_coast: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_wall_speed: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_wall_material_flow: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_skin_speed: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_skin_material_flow: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_skin_density: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        minimum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_fan_speed: {
                        label: string;
                        description: string;
                        unit: string;
                        minimum_value: string;
                        maximum_value: string;
                        default_value: number;
                        type: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_enable_more_layers: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_skin_speed_2: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_skin_material_flow_2: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_skin_density_2: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        minimum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_fan_speed_2: {
                        label: string;
                        description: string;
                        unit: string;
                        minimum_value: string;
                        maximum_value: string;
                        default_value: number;
                        type: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_skin_speed_3: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        default_value: number;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_skin_material_flow_3: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_skin_density_3: {
                        label: string;
                        description: string;
                        unit: string;
                        default_value: number;
                        type: string;
                        minimum_value: string;
                        maximum_value: string;
                        minimum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    bridge_fan_speed_3: {
                        label: string;
                        description: string;
                        unit: string;
                        minimum_value: string;
                        maximum_value: string;
                        default_value: number;
                        type: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                    };
                    clean_between_layers: {
                        label: string;
                        description: string;
                        default_value: boolean;
                        type: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    max_extrusion_before_wipe: {
                        label: string;
                        description: string;
                        default_value: number;
                        type: string;
                        unit: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wipe_retraction_enable: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wipe_retraction_amount: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wipe_retraction_extra_prime_amount: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                    };
                    wipe_retraction_speed: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value: string;
                        maximum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        children: {
                            wipe_retraction_retract_speed: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                            wipe_retraction_prime_speed: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                default_value: number;
                                minimum_value: string;
                                maximum_value: string;
                                minimum_value_warning: string;
                                maximum_value_warning: string;
                                enabled: string;
                                value: string;
                                settable_per_mesh: boolean;
                                settable_per_extruder: boolean;
                            };
                        };
                    };
                    wipe_pause: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wipe_hop_enable: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: boolean;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wipe_hop_amount: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wipe_hop_speed: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wipe_brush_pos_x: {
                        label: string;
                        description: string;
                        type: string;
                        unit: string;
                        default_value: number;
                        minimum_value_warning: string;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wipe_repeat_count: {
                        label: string;
                        description: string;
                        type: string;
                        minimum_value: string;
                        default_value: number;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    wipe_move_distance: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        enabled: string;
                        settable_per_mesh: boolean;
                        settable_per_extruder: boolean;
                        settable_per_meshgroup: boolean;
                    };
                    small_hole_max_size: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        minimum_value: string;
                        default_value: number;
                        settable_per_mesh: boolean;
                        children: {
                            small_feature_max_length: {
                                label: string;
                                description: string;
                                unit: string;
                                type: string;
                                minimum_value: string;
                                default_value: number;
                                value: string;
                                settable_per_mesh: boolean;
                            };
                        };
                    };
                    small_feature_speed_factor: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                    };
                    small_feature_speed_factor_0: {
                        label: string;
                        description: string;
                        unit: string;
                        type: string;
                        default_value: number;
                        value: string;
                        minimum_value: string;
                        minimum_value_warning: string;
                        maximum_value_warning: string;
                        settable_per_mesh: boolean;
                    };
                };
            };
            command_line_settings: {
                label: string;
                description: string;
                type: string;
                enabled: boolean;
                children: {
                    center_object: {
                        description: string;
                        type: string;
                        label: string;
                        default_value: boolean;
                        enabled: boolean;
                    };
                    mesh_position_x: {
                        description: string;
                        type: string;
                        label: string;
                        default_value: number;
                        enabled: boolean;
                    };
                    mesh_position_y: {
                        description: string;
                        type: string;
                        label: string;
                        default_value: number;
                        enabled: boolean;
                    };
                    mesh_position_z: {
                        description: string;
                        type: string;
                        label: string;
                        default_value: number;
                        enabled: boolean;
                    };
                    mesh_rotation_matrix: {
                        label: string;
                        description: string;
                        type: string;
                        default_value: string;
                        enabled: boolean;
                    };
                };
            };
        };
    };
    felixpro2dual: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            platform: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            file_formats: string;
            has_variants: boolean;
            has_materials: boolean;
            preferred_variant_name: string;
            variants_name: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            speed_print: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            material_flow: {
                default_value: number;
            };
            material_flow_layer_0: {
                default_value: number;
                value: string;
            };
            adhesion_type: {
                default_value: string;
            };
            skirt_brim_minimal_length: {
                default_value: number;
            };
            skirt_line_count: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    felixtec4dual: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            platform: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            file_formats: string;
            has_variants: boolean;
            has_materials: boolean;
            preferred_variant_name: string;
            variants_name: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            infill_pattern: {
                value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            speed_print: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            material_flow: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            skirt_brim_minimal_length: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    flsun_qq: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            manufacturer: string;
            author: string;
            file_formats: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_extruder_count: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_shape: {
                default_value: string;
            };
        };
    };
    flsun_qq_s: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            platform: string;
            file_formats: string;
            has_materials: boolean;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_shape: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            z_seam_type: {
                default_value: string;
            };
            gantry_height: {
                value: string;
            };
            machine_nozzle_size: {
                default_value: number;
            };
            material_diameter: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            infill_sparse_density: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            retraction_enable: {
                default_value: boolean;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
        };
    };
    flyingbear_base: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            first_start_actions: string[];
            machine_extruder_trains: {
                0: string;
            };
            has_materials: boolean;
            preferred_material: string;
            has_variants: boolean;
            variants_name: string;
            preferred_variant_name: string;
            has_machine_quality: boolean;
            preferred_quality_type: string;
            exclude_materials: string[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_shape: {
                default_value: string;
            };
            machine_buildplate_type: {
                value: string;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            material_diameter: {
                default_value: number;
            };
            layer_height_0: {
                value: number;
            };
            line_width: {
                value: string;
            };
            skin_line_width: {
                value: string;
            };
            infill_line_width: {
                value: string;
            };
            skirt_brim_line_width: {
                value: string;
            };
            support_interface_line_width: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
            wall_0_wipe_dist: {
                value: number;
            };
            top_bottom_thickness: {
                value: string;
            };
            optimize_wall_printing_order: {
                value: boolean;
            };
            travel_compensate_overlapping_walls_0_enabled: {
                value: boolean;
            };
            fill_perimeter_gaps: {
                value: string;
            };
            filter_out_tiny_gaps: {
                value: boolean;
            };
            fill_outline_gaps: {
                value: boolean;
            };
            z_seam_type: {
                value: string;
            };
            z_seam_corner: {
                value: string;
            };
            infill_sparse_density: {
                value: number;
            };
            infill_pattern: {
                value: string;
            };
            infill_overlap: {
                value: number;
            };
            skin_overlap: {
                value: number;
            };
            infill_wipe_dist: {
                value: number;
            };
            infill_before_walls: {
                value: boolean;
            };
            infill_enable_travel_optimization: {
                value: boolean;
            };
            material_initial_print_temperature: {
                value: string;
            };
            material_final_print_temperature: {
                value: string;
            };
            material_flow: {
                value: number;
            };
            retraction_enable: {
                value: boolean;
            };
            retraction_min_travel: {
                value: number;
            };
            retraction_count_max: {
                value: number;
            };
            retraction_extrusion_window: {
                value: number;
            };
            speed_print: {
                value: number;
            };
            speed_infill: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            speed_roofing: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_prime_tower: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_layer_0: {
                value: number;
            };
            speed_print_layer_0: {
                value: string;
            };
            speed_travel_layer_0: {
                value: string;
            };
            skirt_brim_speed: {
                value: string;
            };
            speed_z_hop: {
                value: number;
            };
            retraction_combing: {
                value: string;
            };
            travel_retract_before_outer_wall: {
                value: boolean;
            };
            retraction_combing_max_distance: {
                value: number;
            };
            travel_avoid_other_parts: {
                value: boolean;
            };
            travel_avoid_supports: {
                value: boolean;
            };
            retraction_hop_enabled: {
                value: boolean;
            };
            retraction_hop: {
                value: number;
            };
            cool_fan_enabled: {
                value: boolean;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_min_layer_time: {
                value: number;
            };
            support_angle: {
                value: string;
            };
            support_pattern: {
                value: string;
            };
            support_infill_rate: {
                value: string;
            };
            support_z_distance: {
                value: string;
            };
            support_xy_distance: {
                value: string;
            };
            support_xy_overrides_z: {
                value: string;
            };
            support_xy_distance_overhang: {
                value: string;
            };
            minimum_support_area: {
                value: number;
            };
            minimum_interface_area: {
                value: number;
            };
            support_interface_enable: {
                value: boolean;
            };
            support_interface_height: {
                value: string;
            };
            support_interface_skip_height: {
                value: number;
            };
            support_interface_density: {
                value: number;
            };
            support_interface_pattern: {
                value: string;
            };
            support_wall_count: {
                value: number;
            };
            support_brim_enable: {
                value: boolean;
            };
            support_brim_width: {
                value: number;
            };
            support_use_towers: {
                value: boolean;
            };
            adhesion_type: {
                value: string;
            };
            skirt_line_count: {
                value: number;
            };
            skirt_gap: {
                value: number;
            };
            skirt_brim_minimal_length: {
                value: number;
            };
            brim_replaces_support: {
                value: boolean;
            };
            meshfix_maximum_resolution: {
                value: number;
            };
            meshfix_maximum_travel_resolution: {
                value: string;
            };
            adaptive_layer_height_variation: {
                value: number;
            };
            adaptive_layer_height_variation_step: {
                value: number;
            };
        };
    };
    flyingbear_ghost_4s: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            platform: string;
            platform_texture: string;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_steps_per_mm_x: {
                default_value: number;
            };
            machine_steps_per_mm_y: {
                default_value: number;
            };
            machine_steps_per_mm_z: {
                default_value: number;
            };
            machine_steps_per_mm_e: {
                default_value: number;
            };
            machine_max_feedrate_x: {
                value: number;
            };
            machine_max_feedrate_y: {
                value: number;
            };
            machine_max_feedrate_z: {
                value: number;
            };
            machine_max_feedrate_e: {
                value: number;
            };
            acceleration_enabled: {
                value: boolean;
            };
            jerk_enabled: {
                value: boolean;
            };
            machine_max_acceleration_x: {
                value: number;
            };
            machine_max_acceleration_y: {
                value: number;
            };
            machine_max_acceleration_z: {
                value: number;
            };
            machine_max_acceleration_e: {
                value: number;
            };
            machine_acceleration: {
                value: number;
            };
            machine_max_jerk_xy: {
                value: number;
            };
            machine_max_jerk_z: {
                value: number;
            };
            machine_max_jerk_e: {
                value: number;
            };
            acceleration_print: {
                value: number;
            };
            acceleration_travel: {
                value: number;
            };
            acceleration_travel_layer_0: {
                value: string;
            };
            acceleration_roofing: {
                enabled: string;
            };
            jerk_print: {
                value: number;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
        };
    };
    folgertech_FT_5: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            gantry_height: {
                value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    geeetech_A10: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
        };
    };
    geeetech_A10M: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
        };
    };
    geeetech_A10T: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
                2: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
        };
    };
    geeetech_A20: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
        };
    };
    geeetech_A20M: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
        };
    };
    geeetech_A20T: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
                2: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
        };
    };
    geeetech_a30: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            file_formats: string;
            visible: boolean;
            has_materials: boolean;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            material_diameter: {
                default_value: number;
            };
            machine_nozzle_size: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_max_acceleration_e: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
        };
    };
    gmax15plus: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_machine_quality: boolean;
            has_variants: boolean;
            variants_name: string;
            preferred_variant_name: string;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_extruder_count: {
                default_value: number;
            };
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            material_diameter: {
                default_value: number;
            };
            machine_nozzle_size: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            gantry_height: {
                value: string;
            };
            speed_print: {
                default_value: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_max_acceleration_e: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
        };
    };
    gmax15plus_dual: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_variants: boolean;
            variants_name: string;
            preferred_variant_name: string;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            material_diameter: {
                default_value: number;
            };
            machine_nozzle_size: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            gantry_height: {
                value: string;
            };
            speed_print: {
                default_value: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_max_acceleration_e: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
        };
    };
    grr_neo: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    hellbot_adonis: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_texture: string;
            platform_offset: number[];
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    hellbot_magna_dual: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_texture: string;
            platform_offset: number[];
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
            };
        };
    };
    hellbot_magna_I: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_texture: string;
            platform_offset: number[];
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    helloBEEprusa: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            platform: string;
            platform_offset: number[];
            file_formats: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_extruder_count: {
                default_value: number;
            };
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            skirt_line_count: {
                default_value: number;
            };
            skirt_brim_minimal_length: {
                default_value: number;
            };
            skirt_gap: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
        };
    };
    hms434: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            exclude_materials: string[];
            has_variants: boolean;
            variants_name: string;
            preferred_variant_name: string;
            has_machine_quality: boolean;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                7: string;
            };
            platform: string;
            platform_offset: number[];
            platform_texture: string;
            first_start_actions: string[];
            supported_actions: string[];
        };
        overrides: {
            machine_extruder_count: {
                default_value: number;
            };
            material_diameter: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_heated_build_volume: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            material_print_temp_wait: {
                default_value: boolean;
            };
            material_bed_temp_wait: {
                default_value: boolean;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            retraction_extra_prime_amount: {
                minimum_value_warning: string;
            };
            optimize_wall_printing_order: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_min_cool_heat_time_window: {
                default_value: number;
            };
            layer_height: {
                maximum_value: string;
            };
            layer_height_0: {
                maximum_value: string;
            };
            line_width: {
                value: string;
            };
            wall_line_width_0: {
                value: string;
            };
            infill_line_width: {
                value: string;
            };
            initial_layer_line_width_factor: {
                value: number;
            };
            wall_thickness: {
                value: string;
            };
            roofing_layer_count: {
                value: string;
            };
            top_bottom_thickness: {
                value: string;
            };
            top_layers: {
                value: string;
            };
            bottom_layers: {
                value: string;
            };
            wall_0_inset: {
                value: string;
            };
            outer_inset_first: {
                value: boolean;
            };
            alternate_extra_perimeter: {
                value: boolean;
            };
            travel_compensate_overlapping_walls_enabled: {
                value: boolean;
            };
            filter_out_tiny_gaps: {
                value: boolean;
            };
            fill_outline_gaps: {
                value: boolean;
            };
            z_seam_type: {
                value: string;
            };
            z_seam_x: {
                value: string;
            };
            z_seam_y: {
                value: string;
            };
            z_seam_corner: {
                value: string;
            };
            skin_outline_count: {
                value: string;
            };
            ironing_line_spacing: {
                value: string;
            };
            ironing_flow: {
                value: string;
            };
            ironing_inset: {
                value: string;
            };
            speed_ironing: {
                value: string;
            };
            infill_sparse_density: {
                value: number;
            };
            infill_pattern: {
                value: string;
            };
            infill_before_walls: {
                value: boolean;
            };
            material_print_temperature_layer_0: {
                value: string;
            };
            material_initial_print_temperature: {
                value: string;
                maximum_value_warning: string;
            };
            material_final_print_temperature: {
                value: string;
            };
            material_bed_temperature_layer_0: {
                value: string;
            };
            material_flow_layer_0: {
                value: string;
            };
            retraction_enable: {
                value: boolean;
            };
            retract_at_layer_change: {
                value: boolean;
            };
            retraction_min_travel: {
                value: string;
            };
            switch_extruder_retraction_speeds: {
                value: string;
            };
            switch_extruder_prime_speed: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_infill: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_travel_layer_0: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_z_hop: {
                value: number;
            };
            speed_slowdown_layers: {
                value: number;
            };
            acceleration_print: {
                value: number;
            };
            acceleration_travel: {
                value: number;
            };
            jerk_print: {
                value: number;
            };
            jerk_travel: {
                value: number;
            };
            retraction_hop_enabled: {
                value: boolean;
            };
            retraction_hop: {
                value: number;
            };
            retraction_combing: {
                value: string;
            };
            cool_fan_speed: {
                value: number;
            };
            cool_fan_enabled: {
                value: boolean;
            };
            cool_min_layer_time_fan_speed_max: {
                value: string;
            };
            cool_min_layer_time: {
                value: number;
            };
            cool_min_speed: {
                value: string;
            };
            cool_lift_head: {
                value: boolean;
            };
            support_pattern: {
                value: string;
            };
            support_infill_rate: {
                value: number;
            };
            support_z_distance: {
                value: number;
            };
            support_xy_distance: {
                value: number;
            };
            support_join_distance: {
                value: number;
            };
            support_interface_pattern: {
                value: string;
            };
            support_roof_pattern: {
                value: string;
            };
            support_interface_enable: {
                value: boolean;
            };
            support_interface_height: {
                value: string;
            };
            support_bottom_height: {
                value: string;
            };
            adhesion_type: {
                value: string;
            };
            skirt_gap: {
                value: number;
            };
            skirt_brim_minimal_length: {
                value: number;
            };
            prime_tower_enable: {
                value: boolean;
            };
            prime_tower_size: {
                value: number;
            };
            prime_tower_position_x: {
                value: number;
            };
            prime_tower_position_y: {
                value: number;
            };
            prime_blob_enable: {
                default_value: boolean;
            };
            meshfix_maximum_resolution: {
                value: number;
            };
            meshfix_maximum_travel_resolution: {
                value: number;
            };
            meshfix_maximum_deviation: {
                value: number;
            };
            minimum_polygon_circumference: {
                value: number;
            };
            coasting_enable: {
                value: boolean;
            };
            coasting_volume: {
                value: number;
            };
            coasting_min_volume: {
                value: number;
            };
            coasting_speed: {
                value: number;
            };
            wall_overhang_angle: {
                value: number;
            };
            bridge_settings_enabled: {
                value: boolean;
            };
            bridge_wall_min_length: {
                value: number;
            };
            bridge_skin_support_threshold: {
                value: number;
            };
            bridge_wall_speed: {
                value: number;
            };
            bridge_wall_material_flow: {
                value: number;
            };
            bridge_skin_speed: {
                value: number;
            };
            bridge_skin_material_flow: {
                value: number;
            };
            bridge_fan_speed: {
                value: number;
            };
            bridge_skin_density_2: {
                value: number;
            };
            bridge_skin_density_3: {
                value: number;
            };
            bridge_skin_material_flow_2: {
                value: number;
            };
            bridge_skin_material_flow_3: {
                value: number;
            };
            bridge_skin_speed_2: {
                value: number;
            };
            bridge_skin_speed_3: {
                value: number;
            };
        };
    };
    I3MetalMotion: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            preferred_material: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    imade3d_jellybox: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            platform: string;
            platform_offset: number[];
            preferred_variant_name: string;
            preferred_quality_type: string;
            has_materials: boolean;
            has_variants: boolean;
            has_machine_quality: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            retraction_prime_speed: {
                value: string;
            };
        };
    };
    imade3d_jellybox_2: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            platform: string;
            platform_offset: number[];
            preferred_variant_name: string;
            preferred_quality_type: string;
            has_materials: boolean;
            has_variants: boolean;
            has_machine_quality: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            gradual_infill_steps: {
                default_value: number;
            };
            gradual_infill_step_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_nozzle_size: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            retraction_prime_speed: {
                value: string;
            };
        };
    };
    imade3d_jellybox_root: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            exclude_materials: string[];
        };
        overrides: {
            machine_gcode_flavor: {
                default_value: string;
            };
            material_diameter: {
                default_value: number;
            };
            material_print_temperature: {
                minimum_value: string;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            material_bed_temperature: {
                minimum_value: string;
            };
            material_standby_temperature: {
                minimum_value: string;
            };
            relative_extrusion: {
                value: boolean;
                enabled: boolean;
            };
        };
    };
    innovo_inventor: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            speed_layer_0: {
                minimum_value: number;
            };
        };
    };
    jgaurora_a1: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            material_diameter: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            speed_print: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
            retraction_enable: {
                default_value: boolean;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
        };
    };
    jgaurora_a3s: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            material_diameter: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            speed_print: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
            retraction_enable: {
                default_value: boolean;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
        };
    };
    jgaurora_a5: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            material_diameter: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            speed_print: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
            retraction_enable: {
                default_value: boolean;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
        };
    };
    jgaurora_jgmaker_magic: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            material_diameter: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            speed_print: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
            retraction_enable: {
                default_value: boolean;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
        };
    };
    jgaurora_z_603s: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            material_diameter: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            speed_print: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
            retraction_enable: {
                default_value: boolean;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
        };
    };
    julia: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            support_angle: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            prime_tower_size: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            support_pattern: {
                default_value: string;
            };
            infill_sparse_density: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
            };
            retraction_combing: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_height: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_depth: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            machine_name: {
                default_value: string;
            };
        };
    };
    kemiq_q2_beta: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    kemiq_q2_gama: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    key3d_tyro: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform_offset: number[];
            has_materials: boolean;
            has_variants: boolean;
            preferred_quality_type: string;
            has_machine_quality: boolean;
            preferred_material: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_heated_build_volume: {
                default_value: boolean;
            };
            material_diameter: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    kossel_mini: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_shape: {
                default_value: string;
            };
        };
    };
    kossel_pro: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_shape: {
                default_value: string;
            };
        };
    };
    kupido: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform_offset: number[];
            exclude_materials: string[];
            preferred_material: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            has_variants: boolean;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            adhesion_type: {
                options: {
                    raft: string;
                    none: string;
                    brim: string;
                };
                default_value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    leapfrog_bolt_pro: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            platform: string;
            platform_offset: number[];
            file_formats: string;
            supports_usb_connection: boolean;
            supports_network_connection: boolean;
            has_materials: boolean;
            has_machine_quality: boolean;
            has_variants: boolean;
            preferred_variant_name: string;
            preferred_material: string;
            variants_name: string;
            exclude_materials: string[];
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            material_final_print_temperature: {
                value: string;
            };
            material_initial_print_temperature: {
                value: string;
            };
            gantry_height: {
                value: string;
            };
            retraction_combing: {
                default_value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            skirt_line_count: {
                default_value: number;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            prime_tower_enable: {
                resolve: string;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            build_volume_temperature: {
                enabled: boolean;
            };
            material_standby_temperature: {
                enabled: boolean;
            };
        };
    };
    leapfrog_creatr_hs: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_shape: {
                default_value: string;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            build_volume_temperature: {
                enabled: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    leapfrog_creatr_hs_xl: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_shape: {
                default_value: string;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            build_volume_temperature: {
                enabled: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    lotmaxx_sc10: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_max_jerk_xy: {
                value: number;
            };
            machine_max_jerk_z: {
                value: number;
            };
            machine_max_jerk_e: {
                value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            material_diameter: {
                default_value: number;
            };
            jerk_print: {
                value: number;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
            acceleration_enabled: {
                value: boolean;
            };
            jerk_enabled: {
                value: boolean;
            };
            speed_print: {
                value: number;
            };
            speed_infill: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_roofing: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_layer_0: {
                value: number;
            };
            speed_print_layer_0: {
                value: string;
            };
            speed_travel_layer_0: {
                value: string;
            };
            speed_prime_tower: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            skirt_brim_speed: {
                value: string;
            };
            retraction_enable: {
                value: boolean;
            };
            retraction_count_max: {
                value: number;
            };
            retraction_extrusion_window: {
                value: number;
            };
            retraction_min_travel: {
                value: number;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_enabled: {
                value: boolean;
            };
            cool_min_layer_time: {
                value: number;
            };
            meshfix_maximum_resolution: {
                value: string;
            };
            meshfix_maximum_travel_resolution: {
                value: string;
            };
            adhesion_type: {
                value: string;
            };
            skirt_gap: {
                value: number;
            };
            skirt_line_count: {
                value: number;
            };
        };
    };
    lotmaxx_sc20: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_max_jerk_xy: {
                value: number;
            };
            machine_max_jerk_z: {
                value: number;
            };
            machine_max_jerk_e: {
                value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            material_diameter: {
                default_value: number;
            };
            jerk_print: {
                value: number;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
            acceleration_enabled: {
                value: boolean;
            };
            jerk_enabled: {
                value: boolean;
            };
            speed_print: {
                value: number;
            };
            speed_infill: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_roofing: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_layer_0: {
                value: number;
            };
            speed_print_layer_0: {
                value: string;
            };
            speed_travel_layer_0: {
                value: string;
            };
            speed_prime_tower: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            skirt_brim_speed: {
                value: string;
            };
            retraction_enable: {
                value: boolean;
            };
            retraction_count_max: {
                value: number;
            };
            retraction_extrusion_window: {
                value: number;
            };
            retraction_min_travel: {
                value: number;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_enabled: {
                value: boolean;
            };
            cool_min_layer_time: {
                value: number;
            };
            meshfix_maximum_resolution: {
                value: string;
            };
            meshfix_maximum_travel_resolution: {
                value: string;
            };
            adhesion_type: {
                value: string;
            };
            skirt_gap: {
                value: number;
            };
            skirt_line_count: {
                value: number;
            };
        };
    };
    lotmaxx_sc60: {
        name: string;
        version: number;
        inherits: string;
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            machine_heated_bed: {
                value: boolean;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            acceleration_print: {
                value: number;
            };
            acceleration_travel: {
                value: number;
            };
            acceleration_travel_layer_0: {
                value: number;
            };
            expand_skins_expand_distance: {
                value: number;
            };
            fill_outline_gaps: {
                default_value: boolean;
            };
            infill_sparse_density: {
                value: number;
            };
            meshfix_maximum_resolution: {
                value: number;
            };
            optimize_wall_printing_order: {
                value: boolean;
            };
            retract_at_layer_change: {
                value: boolean;
            };
            retraction_amount: {
                value: number;
            };
            roofing_layer_count: {
                value: number;
            };
            skin_preshrink: {
                value: number;
            };
            speed_layer_0: {
                value: number;
            };
            speed_print: {
                value: number;
            };
            speed_roofing: {
                value: number;
            };
            speed_topbottom: {
                value: number;
            };
            speed_travel: {
                value: number;
            };
            speed_wall_0: {
                value: number;
            };
            speed_wall_x: {
                value: number;
            };
            support_infill_rate: {
                value: number;
            };
            support_pattern: {
                default_value: string;
            };
            support_use_towers: {
                value: boolean;
            };
            wall_overhang_speed_factor: {
                value: number;
            };
            z_seam_corner: {
                default_value: string;
            };
            z_seam_relative: {
                value: boolean;
            };
            z_seam_type: {
                default_value: string;
            };
            zig_zaggify_infill: {
                value: boolean;
            };
            adhesion_type: {
                default_value: string;
            };
            prime_tower_enable: {
                value: boolean;
            };
            prime_tower_position_x: {
                value: number;
            };
            prime_tower_position_y: {
                value: number;
            };
            prime_tower_min_volume: {
                value: number;
            };
            switch_extruder_retraction_amount: {
                value: number;
            };
            switch_extruder_retraction_speeds: {
                value: number;
            };
        };
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            platform: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            has_materials: boolean;
            preferred_quality_type: string;
        };
    };
    makeblock_mcreate: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            has_machine_quality: boolean;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            gantry_height: {
                value: number;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    makeit_pro_l: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            print_sequence: {
                enabled: boolean;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
            layer_height: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            cool_min_layer_time_fan_speed_max: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_heat_zone_length: {
                default_value: number;
            };
        };
    };
    makeit_pro_m: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            print_sequence: {
                enabled: boolean;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
            layer_height: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            cool_min_layer_time_fan_speed_max: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
        };
    };
    makeit_pro_mx: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            print_sequence: {
                enabled: boolean;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
            layer_height: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            cool_min_layer_time_fan_speed_max: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
        };
    };
    makerbotreplicator: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            machine_x3g_variant: string;
            file_formats: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            prime_tower_size: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_height: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_depth: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            machine_name: {
                default_value: string;
            };
        };
    };
    makeR_pegasus: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    makeR_prusa_tairona_i3: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    maker_starter: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_disallowed_areas: {
                default_value: never[];
            };
            machine_nozzle_tip_outer_diameter: {
                default_value: number;
            };
            machine_nozzle_head_distance: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            speed_slowdown_layers: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            cool_min_layer_time: {
                default_value: number;
            };
            cool_min_layer_time_fan_speed_max: {
                default_value: number;
            };
            support_type: {
                default_value: string;
            };
            support_angle: {
                default_value: number;
            };
            support_xy_distance: {
                default_value: number;
            };
            support_z_distance: {
                default_value: number;
            };
            support_pattern: {
                default_value: string;
            };
            support_infill_rate: {
                value: string;
            };
            adhesion_type: {
                default_value: string;
            };
            skirt_brim_minimal_length: {
                default_value: number;
            };
            raft_airgap: {
                default_value: number;
            };
            raft_surface_layers: {
                default_value: number;
            };
        };
    };
    malyan_m180: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            machine_x3g_variant: string;
            file_formats: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_steps_per_mm_x: {
                default_value: number;
            };
            machine_steps_per_mm_y: {
                default_value: number;
            };
            machine_steps_per_mm_z: {
                default_value: number;
            };
            machine_steps_per_mm_e: {
                default_value: number;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    malyan_m200: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            has_machine_quality: boolean;
            has_materials: boolean;
            preferred_quality_type: string;
            supports_usb_connection: boolean;
            visible: boolean;
            first_start_actions: string[];
            supported_actions: string[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            speed_print: {
                default_value: number;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_infill: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            layer_height: {
                minimum_value_warning: string;
                maximum_value_warning: string;
                default_value: number;
            };
            line_width: {
                value: string;
            };
            material_print_temperature: {
                minimum_value: string;
            };
            material_print_temperature_layer_0: {
                value: string;
            };
            material_bed_temperature: {
                minimum_value: string;
            };
            material_bed_temperature_layer_0: {
                value: string;
            };
            material_standby_temperature: {
                minimum_value: string;
            };
            machine_show_variants: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_max_acceleration_e: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            raft_margin: {
                default_value: number;
            };
            raft_airgap: {
                default_value: number;
            };
            raft_base_thickness: {
                value: string;
            };
            raft_interface_thickness: {
                value: string;
            };
            raft_surface_layers: {
                default_value: number;
            };
            skirt_line_count: {
                default_value: number;
            };
            brim_width: {
                default_value: number;
            };
            retraction_combing: {
                default_value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            coasting_enable: {
                default_value: boolean;
            };
            prime_tower_enable: {
                default_value: boolean;
            };
        };
    };
    mankati_fullscale_xt_plus: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            retraction_enable: {
                default_value: boolean;
            };
            retraction_speed: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_hop: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            speed_layer_0: {
                minimum_value: string;
            };
            cool_fan_enabled: {
                default_value: boolean;
            };
            skirt_line_count: {
                default_value: number;
            };
            skirt_gap: {
                default_value: number;
            };
            skirt_brim_minimal_length: {
                default_value: number;
            };
        };
    };
    Mark2_for_Ultimaker2: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            weight: number;
            has_variants: boolean;
            has_materials: boolean;
            has_machine_quality: boolean;
            file_formats: string;
            icon: string;
            platform: string;
            platform_texture: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            supported_actions: string[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            gantry_height: {
                value: string;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_nozzle_size: {
                default_value: number;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_min_cool_heat_time_window: {
                default_value: number;
            };
            machine_show_variants: {
                default_value: boolean;
            };
            machine_nozzle_head_distance: {
                default_value: number;
            };
            machine_heat_zone_length: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            speed_infill: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            layer_height_0: {
                value: string;
            };
            line_width: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            switch_extruder_retraction_amount: {
                value: string;
                enabled: boolean;
            };
            switch_extruder_retraction_speeds: {
                value: string;
                enabled: boolean;
            };
            switch_extruder_retraction_speed: {
                value: string;
                enabled: boolean;
            };
            switch_extruder_prime_speed: {
                value: string;
                enabled: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                value: string;
            };
            machine_end_gcode: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            acceleration_enabled: {
                default_value: boolean;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            jerk_enabled: {
                default_value: boolean;
            };
            jerk_print: {
                default_value: number;
            };
            jerk_travel: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
            extruder_prime_pos_abs: {
                default_value: boolean;
            };
            extruder_prime_pos_x: {
                default_value: number;
                enabled: boolean;
            };
            extruder_prime_pos_y: {
                default_value: number;
                enabled: boolean;
            };
            extruder_prime_pos_z: {
                default_value: number;
                enabled: boolean;
            };
            layer_start_x: {
                default_value: number;
                enabled: boolean;
            };
            layer_start_y: {
                default_value: number;
                enabled: boolean;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
            machine_disallowed_areas: {
                default_value: number[][][];
            };
        };
    };
    mbot3d_grid2plus: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            machine_x3g_variant: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            machine_steps_per_mm_x: {
                default_value: number;
            };
            machine_steps_per_mm_y: {
                default_value: number;
            };
            machine_steps_per_mm_z: {
                default_value: number;
            };
            machine_steps_per_mm_e: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            speed_wall: {
                value: number;
            };
            speed_wall_x: {
                value: number;
            };
            speed_travel: {
                value: number;
            };
            speed_layer_0: {
                value: number;
            };
            support_interface_enable: {
                default_value: boolean;
            };
            support_interface_height: {
                default_value: number;
            };
            support_interface_density: {
                default_value: number;
            };
            support_interface_pattern: {
                default_value: string;
            };
            infill_overlap: {
                value: string;
            };
            retract_at_layer_change: {
                default_value: boolean;
            };
            travel_retract_before_outer_wall: {
                default_value: boolean;
            };
            material_initial_print_temperature: {
                value: string;
            };
            material_final_print_temperature: {
                value: string;
            };
            travel_avoid_other_parts: {
                default_value: boolean;
            };
            raft_airgap: {
                default_value: number;
            };
            raft_margin: {
                default_value: number;
            };
        };
    };
    mbot3d_grid2plus_dual: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            machine_x3g_variant: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            machine_steps_per_mm_x: {
                default_value: number;
            };
            machine_steps_per_mm_y: {
                default_value: number;
            };
            machine_steps_per_mm_z: {
                default_value: number;
            };
            machine_steps_per_mm_e: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            speed_wall: {
                value: number;
            };
            speed_wall_x: {
                value: number;
            };
            speed_travel: {
                value: number;
            };
            speed_layer_0: {
                value: number;
            };
            support_interface_enable: {
                default_value: boolean;
            };
            support_interface_height: {
                default_value: number;
            };
            support_interface_density: {
                default_value: number;
            };
            support_interface_pattern: {
                default_value: string;
            };
            infill_overlap: {
                value: string;
            };
            retract_at_layer_change: {
                default_value: boolean;
            };
            travel_retract_before_outer_wall: {
                default_value: boolean;
            };
            material_initial_print_temperature: {
                value: string;
            };
            material_final_print_temperature: {
                value: string;
            };
            travel_avoid_other_parts: {
                default_value: boolean;
            };
            raft_airgap: {
                default_value: number;
            };
            raft_margin: {
                default_value: number;
            };
        };
    };
    mbot3d_grid4: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            platform_offset: number[];
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            material_flow: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    mbot3d_grid4_dual: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            platform_offset: number[];
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            material_flow: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    mendel90: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        pages: string[];
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            material_bed_temp_wait: {
                default_value: boolean;
            };
            material_print_temp_prepend: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_nozzle_tip_outer_diameter: {
                default_value: number;
            };
            machine_nozzle_head_distance: {
                default_value: number;
            };
            machine_heat_zone_length: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            gantry_height: {
                value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
        };
    };
    monoprice_select_mini_v1: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            file_formats: string;
            quality_definition: string;
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
        };
    };
    monoprice_select_mini_v2: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            file_formats: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            preferred_quality_type: string;
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            adhesion_type: {
                default_value: string;
            };
            retraction_combing: {
                default_value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            material_print_temperature_layer_0: {
                value: string;
            };
        };
    };
    monoprice_ultimate: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            icon: string;
            has_materials: boolean;
            platform: string;
            platform_texture: string;
            machine_extruder_trains: {
                0: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_max_acceleration_e: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
        };
    };
    mp_mini_delta: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            supports_usb_connection: boolean;
            has_machine_quality: boolean;
            visible: boolean;
            platform_offset: number[];
            has_materials: boolean;
            has_variants: boolean;
            has_machine_materials: boolean;
            has_variant_materials: boolean;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_shape: {
                default_value: string;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_nozzle_size: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            material_bed_temperature: {
                value: number;
            };
            line_width: {
                value: string;
            };
            material_print_temperature_layer_0: {
                value: string;
            };
            material_bed_temperature_layer_0: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_max_acceleration_e: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            retraction_hop_enabled: {
                default_value: boolean;
            };
            retract_at_layer_change: {
                default_value: boolean;
            };
            coasting_enable: {
                default_value: boolean;
            };
        };
    };
    nwa3d_a31: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform_offset: number[];
            has_materials: boolean;
            has_variants: boolean;
            variants_name: string;
            preferred_variant_name: string;
            preferred_quality_type: string;
            has_machine_quality: boolean;
            preferred_material: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            material_diameter: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    nwa3d_a5: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform_offset: number[];
            has_materials: boolean;
            has_variants: boolean;
            preferred_quality_type: string;
            has_machine_quality: boolean;
            preferred_material: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            material_diameter: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    ord: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            machine_extruder_trains: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
            };
            platform_offset: number[];
        };
        overrides: {
            prime_tower_size: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_height: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_depth: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            machine_name: {
                default_value: string;
            };
        };
    };
    peopoly_moai: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            platform: string;
            platform_texture: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            line_width: {
                minimum_value_warning: string;
            };
            wall_line_width: {
                minimum_value_warning: string;
            };
            wall_line_width_x: {
                minimum_value_warning: string;
            };
            skin_line_width: {
                minimum_value_warning: string;
            };
            infill_line_width: {
                minimum_value_warning: string;
            };
            skirt_brim_line_width: {
                minimum_value_warning: string;
            };
            layer_height: {
                maximum_value_warning: string;
                minimum_value_warning: string;
            };
            layer_height_0: {
                maximum_value_warning: string;
                minimum_value_warning: string;
                value: string;
            };
            top_bottom_thickness: {
                minimum_value_warning: string;
                value: string;
            };
            top_thickness: {
                minimum_value_warning: string;
            };
            bottom_thickness: {
                minimum_value_warning: string;
            };
            infill_sparse_thickness: {
                maximum_value_warning: string;
            };
            speed_print: {
                maximum_value_warning: string;
            };
            speed_infill: {
                maximum_value_warning: string;
            };
            speed_wall: {
                maximum_value_warning: string;
                value: string;
            };
            speed_wall_0: {
                maximum_value_warning: string;
            };
            speed_wall_x: {
                maximum_value_warning: string;
                value: string;
            };
            speed_topbottom: {
                maximum_value_warning: string;
                value: string;
            };
            speed_travel: {
                value: number;
            };
            speed_travel_layer_0: {
                value: number;
            };
            speed_layer_0: {
                value: number;
            };
            speed_slowdown_layers: {
                value: number;
            };
            infill_overlap: {
                value: number;
            };
            adhesion_type: {
                value: string;
            };
            print_sequence: {
                enabled: boolean;
            };
            support_enable: {
                enabled: boolean;
            };
            machine_nozzle_temp_enabled: {
                value: string;
            };
            material_bed_temperature: {
                enabled: boolean;
            };
            cool_fan_enabled: {
                enabled: boolean;
                value: string;
            };
            cool_fan_speed_min: {
                enabled: boolean;
                value: number;
            };
            retraction_enable: {
                enabled: boolean;
                value: string;
            };
            retraction_combing: {
                enabled: boolean;
                value: string;
            };
            retract_at_layer_change: {
                enabled: boolean;
                value: boolean;
            };
            cool_min_layer_time_fan_speed_max: {
                enabled: boolean;
            };
            cool_fan_full_at_height: {
                enabled: boolean;
            };
            cool_fan_full_layer: {
                enabled: boolean;
            };
            minimum_polygon_circumference: {
                value: string;
            };
            meshfix_maximum_deviation: {
                value: string;
            };
            skin_outline_count: {
                value: number;
            };
            travel_compensate_overlapping_walls_enabled: {
                value: string;
            };
            travel_compensate_overlapping_walls_0_enabled: {
                value: string;
            };
            travel_compensate_overlapping_walls_x_enabled: {
                value: string;
            };
            wall_0_wipe_dist: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
            infill_sparse_density: {
                value: number;
            };
            infill_pattern: {
                value: string;
            };
            infill_angles: {
                value: string;
            };
            cool_min_layer_time: {
                enabled: boolean;
                value: number;
            };
            cool_min_speed: {
                enabled: boolean;
                value: number;
            };
            cool_lift_head: {
                enabled: boolean;
                value: string;
            };
            material_flow: {
                enabled: boolean;
            };
            material_flow_layer_0: {
                enabled: boolean;
            };
            speed_equalize_flow_enabled: {
                enabled: boolean;
                value: string;
            };
            draft_shield_enabled: {
                enabled: boolean;
                value: string;
            };
            z_seam_corner: {
                value: string;
            };
            z_seam_type: {
                value: string;
            };
            skin_no_small_gaps_heuristic: {
                value: string;
            };
            ironing_enabled: {
                enabled: boolean;
                value: string;
            };
            skin_overlap: {
                value: number;
            };
            infill_wipe_dist: {
                value: number;
            };
            expand_skins_expand_distance: {
                value: string;
            };
            flow_rate_max_extrusion_offset: {
                enabled: boolean;
            };
            flow_rate_extrusion_offset_factor: {
                enabled: boolean;
            };
            adaptive_layer_height_enabled: {
                value: string;
                enabled: boolean;
            };
            bridge_settings_enabled: {
                value: string;
                enabled: boolean;
            };
            acceleration_enabled: {
                value: string;
                enabled: boolean;
            };
            relative_extrusion: {
                value: string;
                enabled: boolean;
            };
            coasting_enable: {
                value: string;
                enabled: boolean;
            };
        };
    };
    predator: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_texture: string;
            supports_usb_connection: boolean;
            visible: boolean;
            platform_offset: number[];
            has_materials: boolean;
            has_variants: boolean;
            has_machine_materials: boolean;
            has_variant_materials: boolean;
            has_machine_quality: boolean;
            quality_definition: string;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            gantry_height: {
                value: number;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_shape: {
                default_value: string;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_nozzle_size: {
                default_value: number;
                minimum_value: number;
                maximum_value: number;
            };
            line_width: {
                value: string;
            };
            material_print_temperature_layer_0: {
                value: string;
            };
            material_bed_temperature_layer_0: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_max_acceleration_e: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            retraction_hop_enabled: {
                default_value: boolean;
            };
            retract_at_layer_change: {
                default_value: boolean;
            };
            coasting_enable: {
                default_value: boolean;
            };
        };
    };
    printrbot_play: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            speed_print: {
                default_value: number;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_max_acceleration_e: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    printrbot_play_heated: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_depth: {
                default_value: number;
            };
        };
    };
    printrbot_simple: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            platform: string;
            platform_offset: number[];
            file_formats: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    printrbot_simple_extended: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            platform: string;
            platform_offset: number[];
            file_formats: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    printrbot_simple_makers_kit: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    prusa_i3: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    prusa_i3_mk2: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    prusa_i3_mk3: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            icon: string;
            platform: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            material_diameter: {
                default_value: number;
            };
            machine_nozzle_size: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    prusa_i3_xl: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    punchtec_connect_xl: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            prime_tower_size: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_height: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_depth: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            machine_name: {
                default_value: string;
            };
        };
    };
    raise3D_N2_dual: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_min_cool_heat_time_window: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            gantry_height: {
                value: string;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
        };
    };
    raise3D_N2_plus_dual: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_min_cool_heat_time_window: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            gantry_height: {
                value: string;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
        };
    };
    raise3D_N2_plus_single: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_min_cool_heat_time_window: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            gantry_height: {
                value: string;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
        };
    };
    raise3D_N2_single: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_min_cool_heat_time_window: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            gantry_height: {
                value: string;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
        };
    };
    renkforce_rf100: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            file_formats: string;
            manufacturer: string;
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            adhesion_type: {
                default_value: string;
            };
            bottom_thickness: {
                value: string;
            };
            brim_width: {
                value: string;
            };
            cool_fan_enabled: {
                value: string;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_speed_max: {
                value: string;
            };
            cool_fan_speed_min: {
                value: string;
            };
            cool_lift_head: {
                value: string;
            };
            cool_min_layer_time: {
                value: string;
            };
            cool_min_speed: {
                value: string;
            };
            infill_before_walls: {
                value: string;
            };
            infill_line_width: {
                value: string;
            };
            infill_overlap: {
                value: string;
            };
            infill_sparse_density: {
                value: string;
            };
            ironing_enabled: {
                value: string;
            };
            layer_0_z_overlap: {
                value: string;
            };
            layer_height_0: {
                value: string;
            };
            machine_depth: {
                value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_height: {
                value: string;
            };
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_width: {
                value: string;
            };
            material_bed_temperature: {
                enabled: boolean;
            };
            material_flow: {
                value: string;
            };
            material_print_temperature: {
                value: string;
            };
            ooze_shield_enabled: {
                value: string;
            };
            raft_airgap: {
                value: string;
            };
            raft_base_line_spacing: {
                value: string;
            };
            raft_base_line_width: {
                value: string;
            };
            raft_base_thickness: {
                value: string;
            };
            raft_interface_line_spacing: {
                value: string;
            };
            raft_interface_line_width: {
                value: string;
            };
            raft_interface_thickness: {
                value: string;
            };
            raft_margin: {
                value: string;
            };
            raft_speed: {
                value: string;
            };
            raft_surface_layers: {
                value: string;
            };
            raft_surface_line_spacing: {
                value: string;
            };
            raft_surface_line_width: {
                value: string;
            };
            raft_surface_thickness: {
                value: string;
            };
            retraction_amount: {
                value: string;
            };
            retraction_combing: {
                default_value: string;
            };
            retraction_enable: {
                value: string;
            };
            retraction_min_travel: {
                value: string;
            };
            skin_overlap: {
                value: string;
            };
            skirt_brim_minimal_length: {
                value: string;
            };
            skirt_gap: {
                value: string;
            };
            skirt_line_count: {
                value: string;
            };
            speed_infill: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            support_angle: {
                value: string;
            };
            support_enable: {
                value: string;
            };
            support_infill_rate: {
                value: string;
            };
            support_line_width: {
                value: string;
            };
            support_pattern: {
                default_value: string;
            };
            support_type: {
                default_value: string;
            };
            support_xy_distance: {
                value: string;
            };
            support_z_distance: {
                value: string;
            };
            top_bottom_thickness: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
        };
    };
    renkforce_rf100_v2: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            file_formats: string;
            manufacturer: string;
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            adhesion_type: {
                default_value: string;
            };
            bottom_thickness: {
                value: string;
            };
            brim_width: {
                value: string;
            };
            cool_fan_enabled: {
                value: string;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_speed_max: {
                value: string;
            };
            cool_fan_speed_min: {
                value: string;
            };
            cool_lift_head: {
                value: string;
            };
            cool_min_layer_time: {
                value: string;
            };
            cool_min_speed: {
                value: string;
            };
            infill_before_walls: {
                value: string;
            };
            infill_line_width: {
                value: string;
            };
            infill_overlap: {
                value: string;
            };
            infill_sparse_density: {
                value: string;
            };
            ironing_enabled: {
                value: string;
            };
            layer_0_z_overlap: {
                value: string;
            };
            layer_height_0: {
                value: string;
            };
            machine_depth: {
                value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_height: {
                value: string;
            };
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_width: {
                value: string;
            };
            material_bed_temperature: {
                enabled: boolean;
            };
            material_flow: {
                value: string;
            };
            material_print_temperature: {
                value: string;
            };
            ooze_shield_enabled: {
                value: string;
            };
            raft_airgap: {
                value: string;
            };
            raft_base_line_spacing: {
                value: string;
            };
            raft_base_line_width: {
                value: string;
            };
            raft_base_thickness: {
                value: string;
            };
            raft_interface_line_spacing: {
                value: string;
            };
            raft_interface_line_width: {
                value: string;
            };
            raft_interface_thickness: {
                value: string;
            };
            raft_margin: {
                value: string;
            };
            raft_speed: {
                value: string;
            };
            raft_surface_layers: {
                value: string;
            };
            raft_surface_line_spacing: {
                value: string;
            };
            raft_surface_line_width: {
                value: string;
            };
            raft_surface_thickness: {
                value: string;
            };
            retraction_amount: {
                value: string;
            };
            retraction_combing: {
                default_value: string;
            };
            retraction_enable: {
                value: string;
            };
            retraction_min_travel: {
                value: string;
            };
            skin_overlap: {
                value: string;
            };
            skirt_brim_minimal_length: {
                value: string;
            };
            skirt_gap: {
                value: string;
            };
            skirt_line_count: {
                value: string;
            };
            speed_infill: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            support_angle: {
                value: string;
            };
            support_enable: {
                value: string;
            };
            support_infill_rate: {
                value: string;
            };
            support_line_width: {
                value: string;
            };
            support_pattern: {
                default_value: string;
            };
            support_type: {
                default_value: string;
            };
            support_xy_distance: {
                value: string;
            };
            support_z_distance: {
                value: string;
            };
            top_bottom_thickness: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
        };
    };
    renkforce_rf100_xl: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            file_formats: string;
            manufacturer: string;
            visible: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            adhesion_type: {
                default_value: string;
            };
            bottom_thickness: {
                value: string;
            };
            brim_width: {
                value: string;
            };
            cool_fan_enabled: {
                value: string;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_speed_max: {
                value: string;
            };
            cool_fan_speed_min: {
                value: string;
            };
            cool_lift_head: {
                value: string;
            };
            cool_min_layer_time: {
                value: string;
            };
            cool_min_speed: {
                value: string;
            };
            infill_before_walls: {
                value: string;
            };
            infill_line_width: {
                value: string;
            };
            infill_overlap: {
                value: string;
            };
            infill_sparse_density: {
                value: string;
            };
            ironing_enabled: {
                value: string;
            };
            layer_0_z_overlap: {
                value: string;
            };
            layer_height_0: {
                value: string;
            };
            machine_depth: {
                value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: string;
            };
            machine_height: {
                value: string;
            };
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_width: {
                value: string;
            };
            material_bed_temperature: {
                value: string;
            };
            material_print_temperature: {
                value: string;
            };
            ooze_shield_enabled: {
                value: string;
            };
            raft_airgap: {
                value: string;
            };
            raft_base_line_spacing: {
                value: string;
            };
            raft_base_line_width: {
                value: string;
            };
            raft_base_thickness: {
                value: string;
            };
            raft_interface_line_spacing: {
                value: string;
            };
            raft_interface_line_width: {
                value: string;
            };
            raft_interface_thickness: {
                value: string;
            };
            raft_margin: {
                value: string;
            };
            raft_speed: {
                value: string;
            };
            raft_surface_layers: {
                value: string;
            };
            raft_surface_line_spacing: {
                value: string;
            };
            raft_surface_line_width: {
                value: string;
            };
            raft_surface_thickness: {
                value: string;
            };
            retraction_amount: {
                value: string;
            };
            retraction_combing: {
                default_value: string;
            };
            retraction_enable: {
                value: string;
            };
            retraction_min_travel: {
                value: string;
            };
            skin_overlap: {
                value: string;
            };
            skirt_brim_minimal_length: {
                value: string;
            };
            skirt_gap: {
                value: string;
            };
            skirt_line_count: {
                value: string;
            };
            speed_infill: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            support_angle: {
                value: string;
            };
            support_enable: {
                value: string;
            };
            support_infill_rate: {
                value: string;
            };
            support_line_width: {
                value: string;
            };
            support_pattern: {
                default_value: string;
            };
            support_type: {
                default_value: string;
            };
            support_xy_distance: {
                value: string;
            };
            support_z_distance: {
                value: string;
            };
            top_bottom_thickness: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
        };
    };
    rigid3d: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            quality_definition: string;
            preferred_quality_type: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
        };
    };
    rigid3d_3rdgen: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            quality_definition: string;
            preferred_quality_type: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
        };
    };
    rigid3d_base: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            has_machine_quality: boolean;
            machine_extruder_trains: {
                0: string;
            };
            first_start_actions: string[];
            supported_actions: string[];
            preferred_material: string;
            exclude_materials: string[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            material_diameter: {
                default_value: number;
            };
            machine_max_feedrate_x: {
                value: number;
            };
            machine_max_feedrate_y: {
                value: number;
            };
            machine_max_feedrate_z: {
                value: number;
            };
            machine_max_feedrate_e: {
                value: number;
            };
            machine_max_acceleration_x: {
                value: number;
            };
            machine_max_acceleration_y: {
                value: number;
            };
            machine_max_acceleration_z: {
                value: number;
            };
            machine_max_acceleration_e: {
                value: number;
            };
            machine_acceleration: {
                value: number;
            };
            machine_max_jerk_xy: {
                value: number;
            };
            machine_max_jerk_z: {
                value: number;
            };
            machine_max_jerk_e: {
                value: number;
            };
            acceleration_print: {
                value: number;
            };
            acceleration_travel: {
                value: number;
            };
            acceleration_travel_layer_0: {
                value: string;
            };
            acceleration_roofing: {
                enabled: string;
            };
            jerk_print: {
                value: number;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
            acceleration_enabled: {
                value: boolean;
            };
            jerk_enabled: {
                value: boolean;
            };
            speed_print: {
                value: number;
            };
            speed_infill: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_roofing: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_layer_0: {
                value: number;
            };
            speed_print_layer_0: {
                value: string;
            };
            speed_travel_layer_0: {
                value: string;
            };
            speed_prime_tower: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_z_hop: {
                value: number;
            };
            skirt_brim_speed: {
                value: string;
            };
            line_width: {
                value: string;
            };
            optimize_wall_printing_order: {
                value: string;
            };
            material_initial_print_temperature: {
                value: string;
            };
            material_final_print_temperature: {
                value: string;
            };
            material_flow: {
                value: number;
            };
            z_seam_type: {
                value: string;
            };
            z_seam_corner: {
                value: string;
            };
            infill_sparse_density: {
                value: string;
            };
            wall_0_wipe_dist: {
                value: number;
            };
            retraction_speed: {
                maximum_value_warning: string;
                value: number;
                maximum_value: number;
            };
            retraction_retract_speed: {
                maximum_value_warning: string;
                value: string;
                maximum_value: number;
            };
            retraction_prime_speed: {
                maximum_value_warning: string;
                value: string;
                maximum_value: number;
            };
            retraction_hop_enabled: {
                value: string;
            };
            retraction_hop: {
                value: number;
            };
            retraction_combing: {
                value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_combing_max_distance: {
                value: number;
            };
            travel_avoid_other_parts: {
                value: boolean;
            };
            travel_avoid_supports: {
                value: boolean;
            };
            travel_retract_before_outer_wall: {
                value: boolean;
            };
            small_hole_max_size: {
                value: number;
            };
            retraction_enable: {
                value: boolean;
            };
            retraction_count_max: {
                value: number;
            };
            retraction_extrusion_window: {
                value: string;
            };
            retraction_min_travel: {
                value: number;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_enabled: {
                value: boolean;
            };
            cool_min_layer_time: {
                value: number;
            };
            adhesion_type: {
                value: string;
            };
            skirt_gap: {
                value: number;
            };
            skirt_line_count: {
                value: number;
            };
            adaptive_layer_height_variation: {
                value: number;
            };
            adaptive_layer_height_variation_step: {
                value: number;
            };
            meshfix_maximum_resolution: {
                value: string;
            };
            meshfix_maximum_travel_resolution: {
                value: string;
            };
            support_angle: {
                value: string;
            };
            support_pattern: {
                value: string;
            };
            support_infill_rate: {
                value: string;
            };
            support_use_towers: {
                value: boolean;
            };
            support_xy_distance: {
                value: string;
            };
            support_xy_distance_overhang: {
                value: string;
            };
            support_z_distance: {
                value: string;
            };
            support_xy_overrides_z: {
                value: string;
            };
            support_wall_count: {
                value: number;
            };
            support_brim_enable: {
                value: boolean;
            };
            support_brim_width: {
                value: number;
            };
            support_interface_enable: {
                value: boolean;
            };
            support_interface_height: {
                value: string;
            };
            support_interface_density: {
                value: number;
            };
            support_interface_pattern: {
                value: string;
            };
            support_interface_skip_height: {
                value: number;
            };
            minimum_support_area: {
                value: number;
            };
            minimum_interface_area: {
                value: number;
            };
            top_bottom_thickness: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
            layer_height_0: {
                value: number;
            };
        };
    };
    rigid3d_hobby: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            quality_definition: string;
            preferred_quality_type: string;
            preferred_material: string;
            exclude_materials: string[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
        };
    };
    rigid3d_mucit: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            quality_definition: string;
            preferred_quality_type: string;
            platform: string;
            platform_offset: number[];
            preferred_material: string;
            exclude_materials: string[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
        };
    };
    rigid3d_zero: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            quality_definition: string;
            preferred_quality_type: string;
            preferred_material: string;
            exclude_materials: string[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
        };
    };
    rigid3d_zero2: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            quality_definition: string;
            preferred_quality_type: string;
            platform: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
        };
    };
    rigidbot: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            speed_layer_0: {
                minimum_value: string;
            };
            cool_fan_enabled: {
                default_value: boolean;
            };
            skirt_line_count: {
                default_value: number;
            };
            skirt_gap: {
                default_value: number;
            };
            skirt_brim_minimal_length: {
                default_value: number;
            };
        };
    };
    rigidbot_big: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            speed_layer_0: {
                minimum_value: string;
            };
            cool_fan_enabled: {
                default_value: boolean;
            };
            skirt_line_count: {
                default_value: number;
            };
            skirt_gap: {
                default_value: number;
            };
            skirt_brim_minimal_length: {
                default_value: number;
            };
        };
    };
    robo_3d_r1: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            cool_min_layer_time: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            cool_min_speed: {
                default_value: number;
            };
            support_angle: {
                default_value: number;
            };
            prime_tower_size: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
            raft_airgap: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            material_flow: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
            };
            retraction_combing: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_height: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_depth: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            support_z_distance: {
                default_value: number;
            };
            machine_name: {
                default_value: string;
            };
        };
    };
    seemecnc_artemis: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_depth: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_height: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_name: {
                default_value: string;
            };
            machine_shape: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            relative_extrusion: {
                value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_combing: {
                default_value: string;
            };
            retraction_hop_enabled: {
                default_value: boolean;
            };
            retraction_hop_only_when_collides: {
                default_value: boolean;
            };
            retraction_speed: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    seemecnc_v32: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_depth: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_height: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_name: {
                default_value: string;
            };
            machine_shape: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            relative_extrusion: {
                value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_combing: {
                default_value: string;
            };
            retraction_hop_enabled: {
                default_value: boolean;
            };
            retraction_hop_only_when_collides: {
                default_value: boolean;
            };
            retraction_speed: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    skriware_2: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform_offset: number[];
            supports_usb_connection: boolean;
            platform: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            raft_interface_thickness: {
                value: string;
            };
            wipe_retraction_prime_speed: {
                value: string;
            };
            support_skip_zag_per_mm: {
                default_value: number;
            };
            material_bed_temperature: {
                value: string;
            };
            raft_airgap: {
                default_value: number;
            };
            top_layers: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            raft_surface_acceleration: {
                value: string;
            };
            meshfix_maximum_travel_resolution: {
                value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            wall_material_flow: {
                value: string;
            };
            raft_interface_jerk: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            prime_tower_size: {
                default_value: number;
            };
            max_skin_angle_for_expansion: {
                default_value: number;
            };
            raft_acceleration: {
                value: string;
            };
            support_xy_distance: {
                default_value: number;
            };
            xy_offset_layer_0: {
                value: string;
            };
            raft_interface_fan_speed: {
                value: string;
            };
            retraction_speed: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            travel_avoid_supports: {
                default_value: boolean;
            };
            infill_overlap_mm: {
                value: string;
            };
            support_roof_height: {
                value: string;
            };
            speed_travel_layer_0: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            acceleration_wall_x: {
                value: string;
            };
            layer_0_z_overlap: {
                value: string;
            };
            switch_extruder_retraction_speed: {
                value: string;
            };
            travel_compensate_overlapping_walls_enabled: {
                default_value: boolean;
            };
            raft_base_acceleration: {
                value: string;
            };
            raft_base_speed: {
                value: string;
            };
            wall_0_material_flow: {
                value: string;
            };
            support_infill_rate: {
                value: string;
            };
            raft_surface_layers: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            retraction_prime_speed: {
                value: string;
            };
            support_interface_material_flow: {
                value: string;
            };
            raft_surface_fan_speed: {
                value: string;
            };
            raft_base_line_width: {
                value: string;
            };
            infill_line_distance: {
                value: string;
            };
            default_material_print_temperature: {
                default_value: number;
            };
            speed_roofing: {
                value: string;
            };
            skin_material_flow: {
                value: string;
            };
            cool_fan_full_layer: {
                value: string;
            };
            material_break_preparation_temperature: {
                value: string;
            };
            support_roof_density: {
                value: string;
            };
            support_infill_sparse_thickness: {
                value: string;
            };
            retraction_retract_speed: {
                value: string;
            };
            speed_slowdown_layers: {
                default_value: number;
            };
            support_line_distance: {
                value: string;
            };
            cool_lift_head: {
                default_value: boolean;
            };
            min_skin_width_for_expansion: {
                value: string;
            };
            cool_min_speed: {
                default_value: number;
            };
            switch_extruder_retraction_speeds: {
                default_value: number;
            };
            raft_base_line_spacing: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            skirt_brim_material_flow: {
                value: string;
            };
            speed_infill: {
                value: string;
            };
            support_initial_layer_line_distance: {
                value: string;
            };
            support_use_towers: {
                default_value: boolean;
            };
            skin_no_small_gaps_heuristic: {
                default_value: boolean;
            };
            acceleration_roofing: {
                value: string;
            };
            material_initial_print_temperature: {
                value: string;
            };
            material_diameter: {
                default_value: number;
            };
            xy_offset: {
                default_value: number;
            };
            support_extruder_nr: {
                value: string;
            };
            support_brim_line_count: {
                value: string;
            };
            support_interface_extruder_nr: {
                value: string;
            };
            support_roof_extruder_nr: {
                value: string;
            };
            material_adhesion_tendency: {
                default_value: number;
            };
            material_standby_temperature: {
                default_value: number;
            };
            cool_fan_speed_0: {
                default_value: number;
            };
            brim_line_count: {
                value: string;
            };
            adhesion_type: {
                default_value: string;
            };
            switch_extruder_retraction_amount: {
                value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            acceleration_travel: {
                value: string;
            };
            jerk_print_layer_0: {
                value: string;
            };
            raft_surface_thickness: {
                value: string;
            };
            raft_base_jerk: {
                value: string;
            };
            bottom_thickness: {
                value: string;
            };
            roofing_material_flow: {
                value: string;
            };
            top_skin_expand_distance: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            support_enable: {
                default_value: boolean;
            };
            acceleration_print_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            infill_before_walls: {
                default_value: boolean;
            };
            raft_interface_line_spacing: {
                value: string;
            };
            gantry_height: {
                value: string;
            };
            material_print_temperature_layer_0: {
                value: string;
            };
            raft_interface_line_width: {
                value: string;
            };
            skirt_brim_line_width: {
                value: string;
            };
            z_seam_y: {
                value: string;
            };
            roofing_layer_count: {
                value: string;
            };
            raft_margin: {
                default_value: number;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            retraction_min_travel: {
                value: string;
            };
            acceleration_layer_0: {
                value: string;
            };
            support_z_distance: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            raft_jerk: {
                value: string;
            };
            raft_surface_speed: {
                value: string;
            };
            initial_layer_line_width_factor: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            bottom_skin_preshrink: {
                value: string;
            };
            ironing_inset: {
                value: string;
            };
            jerk_travel: {
                value: string;
            };
            machine_depth: {
                default_value: number;
            };
            jerk_skirt_brim: {
                value: string;
            };
            infill_wipe_dist: {
                value: string;
            };
            raft_interface_acceleration: {
                value: string;
            };
            z_seam_x: {
                value: string;
            };
            material_print_temperature: {
                value: string;
            };
            material_bed_temperature_layer_0: {
                value: string;
            };
            wipe_retraction_retract_speed: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
            infill_overlap: {
                value: string;
            };
            acceleration_support_infill: {
                value: string;
            };
            travel_compensate_overlapping_walls_0_enabled: {
                value: string;
            };
            support_bottom_material_flow: {
                value: string;
            };
            jerk_support_roof: {
                value: string;
            };
            wall_x_material_flow: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            support_angle: {
                default_value: number;
            };
            infill_sparse_thickness: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
            retraction_combing: {
                default_value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                default_value: number;
            };
            acceleration_infill: {
                value: string;
            };
            bridge_wall_speed: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            support_offset: {
                default_value: number;
            };
            build_volume_temperature: {
                default_value: number;
            };
            switch_extruder_prime_speed: {
                value: string;
            };
            speed_prime_tower: {
                value: string;
            };
            top_skin_preshrink: {
                value: string;
            };
            jerk_ironing: {
                value: string;
            };
            skin_outline_count: {
                default_value: number;
            };
            skirt_brim_speed: {
                value: string;
            };
            raft_base_thickness: {
                value: string;
            };
            infill_sparse_density: {
                default_value: number;
            };
            support_bottom_extruder_nr: {
                value: string;
            };
            support_material_flow: {
                value: string;
            };
            min_infill_area: {
                default_value: number;
            };
            jerk_support: {
                value: string;
            };
            bottom_skin_expand_distance: {
                value: string;
            };
            retract_at_layer_change: {
                default_value: boolean;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_support_bottom: {
                value: string;
            };
            optimize_wall_printing_order: {
                default_value: boolean;
            };
            skirt_brim_minimal_length: {
                default_value: number;
            };
            jerk_support_infill: {
                value: string;
            };
            initial_bottom_layers: {
                value: string;
            };
            prime_tower_position_x: {
                value: string;
            };
            acceleration_support_bottom: {
                value: string;
            };
            speed_support_roof: {
                value: string;
            };
            speed_support_infill: {
                value: string;
            };
            bridge_skin_speed_2: {
                value: string;
            };
            raft_fan_speed: {
                default_value: number;
            };
            wipe_retraction_amount: {
                value: string;
            };
            skin_edge_support_thickness: {
                value: string;
            };
            bottom_layers: {
                value: string;
            };
            retraction_extrusion_window: {
                value: string;
            };
            acceleration_ironing: {
                value: string;
            };
            support_top_distance: {
                value: string;
            };
            travel_retract_before_outer_wall: {
                default_value: boolean;
            };
            material_flow: {
                default_value: number;
            };
            support_bottom_distance: {
                value: string;
            };
            expand_skins_expand_distance: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            support_zag_skip_count: {
                value: string;
            };
            connect_infill_polygons: {
                value: string;
            };
            acceleration_skirt_brim: {
                value: string;
            };
            z_seam_corner: {
                default_value: string;
            };
            raft_surface_jerk: {
                value: string;
            };
            cross_infill_pocket_size: {
                value: string;
            };
            support_infill_extruder_nr: {
                value: string;
            };
            acceleration_enabled: {
                default_value: boolean;
            };
            jerk_wall_x: {
                value: string;
            };
            skin_overlap: {
                value: string;
            };
            infill_material_flow: {
                value: string;
            };
            speed_equalize_flow_max: {
                default_value: number;
            };
            skin_preshrink: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            support_tree_collision_resolution: {
                value: string;
            };
            meshfix_maximum_deviation: {
                default_value: number;
            };
            jerk_roofing: {
                value: string;
            };
            fill_outline_gaps: {
                default_value: boolean;
            };
            layer_height: {
                default_value: number;
            };
            remove_empty_first_layers: {
                default_value: boolean;
            };
            prime_tower_flow: {
                value: string;
            };
            support_roof_line_distance: {
                value: string;
            };
            wipe_retraction_speed: {
                value: string;
            };
            support_extruder_nr_layer_0: {
                value: string;
            };
            layer_height_0: {
                default_value: number;
            };
            multiple_mesh_overlap: {
                default_value: number;
            };
            ooze_shield_dist: {
                default_value: number;
            };
            jerk_enabled: {
                default_value: boolean;
            };
            acceleration_support: {
                value: string;
            };
            adhesion_extruder_nr: {
                value: string;
            };
            skirt_line_count: {
                default_value: number;
            };
            travel_compensate_overlapping_walls_x_enabled: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            raft_speed: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            machine_width: {
                default_value: number;
            };
            acceleration_wall: {
                value: string;
            };
            jerk_infill: {
                value: string;
            };
            wipe_hop_enable: {
                value: string;
            };
            acceleration_travel_layer_0: {
                value: string;
            };
            raft_interface_speed: {
                value: string;
            };
            skin_edge_support_layers: {
                value: string;
            };
            support_xy_distance_overhang: {
                value: string;
            };
            brim_width: {
                default_value: number;
            };
            coasting_enable: {
                default_value: boolean;
            };
            jerk_print: {
                default_value: number;
            };
            acceleration_support_roof: {
                value: string;
            };
            prime_tower_min_volume: {
                default_value: number;
            };
            support_roof_material_flow: {
                value: string;
            };
            wall_0_wipe_dist: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            retraction_count_max: {
                default_value: number;
            };
            skin_overlap_mm: {
                value: string;
            };
            extruders_enabled_count: {
                value: string;
            };
            speed_support_bottom: {
                value: string;
            };
            support_skip_some_zags: {
                default_value: boolean;
            };
            ooze_shield_angle: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            speed_print_layer_0: {
                value: string;
            };
        };
    };
    smoothie: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            machine_extruder_trains: {
                0: string;
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
                6: string;
                7: string;
            };
            first_start_actions: string[];
        };
        overrides: {
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_always_write_active_tool: {
                default_value: boolean;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    stereotech_start: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            icon: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_shape: {
                default_value: string;
            };
        };
    };
    stereotech_ste320: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            platform: string;
            platform_texture: string;
            platform_offset: number[];
            file_formats: string;
            has_materials: boolean;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
        };
    };
    strateo3d: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            has_variants: boolean;
            preferred_variant_name: string;
            preferred_material: string;
            preferred_quality_type: string;
            variants_name: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_heated_build_volume: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            extruder_prime_pos_y: {
                minimum_value: string;
                maximum_value: string;
            };
            extruder_prime_pos_x: {
                minimum_value: string;
                maximum_value: string;
            };
            machine_heat_zone_length: {
                default_value: number;
            };
            default_material_print_temperature: {
                maximum_value_warning: string;
            };
            material_print_temperature: {
                maximum_value_warning: string;
            };
            material_print_temperature_layer_0: {
                maximum_value_warning: string;
            };
            material_bed_temperature: {
                maximum_value: string;
            };
            material_bed_temperature_layer_0: {
                maximum_value: string;
            };
            extruder_prime_pos_abs: {
                default_value: boolean;
            };
            machine_acceleration: {
                default_value: number;
            };
            acceleration_enabled: {
                value: boolean;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_layer_0: {
                value: string;
            };
            adaptive_layer_height_variation: {
                default_value: number;
            };
            adaptive_layer_height_variation_step: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            expand_skins_expand_distance: {
                value: string;
            };
            gradual_infill_step_height: {
                value: string;
            };
            gradual_support_infill_step_height: {
                value: string;
            };
            infill_before_walls: {
                default_value: boolean;
            };
            infill_overlap: {
                value: string;
            };
            infill_wipe_dist: {
                value: string;
            };
            jerk_enabled: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            layer_start_x: {
                value: string;
            };
            layer_start_y: {
                value: string;
            };
            machine_min_cool_heat_time_window: {
                value: string;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            material_final_print_temperature: {
                value: string;
            };
            material_flow: {
                default_value: number;
            };
            material_flow_layer_0: {
                value: string;
            };
            material_initial_print_temperature: {
                value: string;
            };
            meshfix_maximum_resolution: {
                value: string;
            };
            optimize_wall_printing_order: {
                value: string;
            };
            prime_blob_enable: {
                enabled: boolean;
                default_value: boolean;
            };
            prime_tower_min_volume: {
                default_value: number;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_combing: {
                default_value: string;
            };
            retraction_combing_max_distance: {
                default_value: number;
            };
            retraction_count_max: {
                default_value: number;
            };
            retraction_hop: {
                value: string;
            };
            retraction_hop_enabled: {
                value: string;
            };
            retraction_hop_only_when_collides: {
                value: string;
            };
            retraction_min_travel: {
                value: string;
            };
            retraction_prime_speed: {
                value: string;
            };
            retraction_speed: {
                default_value: number;
            };
            skin_overlap: {
                value: string;
            };
            skirt_brim_minimal_length: {
                default_value: number;
            };
            speed_layer_0: {
                value: string;
            };
            speed_travel_layer_0: {
                value: string;
            };
            speed_prime_tower: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            support_angle: {
                value: string;
            };
            support_bottom_distance: {
                value: string;
                maximum_value_warning: string;
            };
            support_interface_enable: {
                default_value: boolean;
            };
            support_interface_height: {
                value: string;
            };
            support_interface_offset: {
                value: string;
            };
            support_top_distance: {
                value: string;
                maximum_value_warning: string;
            };
            support_use_towers: {
                default_value: boolean;
            };
            support_xy_distance: {
                value: string;
            };
            support_xy_distance_overhang: {
                value: string;
            };
            support_z_distance: {
                value: string;
                maximum_value_warning: string;
            };
            switch_extruder_prime_speed: {
                value: string;
            };
            switch_extruder_retraction_amount: {
                value: string;
            };
            switch_extruder_retraction_speeds: {
                value: string;
            };
            top_bottom_thickness: {
                value: string;
                minimum_value_warning: string;
            };
            top_thickness: {
                value: string;
            };
            top_layers: {
                value: string;
            };
            bottom_thickness: {
                value: string;
            };
            bottom_layers: {
                value: string;
            };
            travel_avoid_distance: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
        };
    };
    structur3d_discov3ry1_complete_um2plus: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            platform: string;
            platform_texture: string;
            platform_offset: number[];
            has_materials: boolean;
            has_variants: boolean;
            variants_name: string;
            preferred_variant_name: string;
            preferred_material: string;
            has_machine_quality: boolean;
            preferred_quality_type: string;
            first_start_actions: never[];
            supported_actions: never[];
            machine_extruder_trains: {
                0: string;
            };
            firmware_file: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            speed_infill: {
                value: string;
            };
            infill_sparse_density: {
                value: number;
            };
            retraction_hop_enabled: {
                value: boolean;
            };
            adhesion_type: {
                default_value: string;
            };
            skirt_brim_minimal_length: {
                value: number;
            };
            speed_print: {
                value: number;
            };
            speed_wall_x: {
                value: string;
            };
            layer_height_0: {
                value: string;
            };
            line_width: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            machine_height: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_show_variants: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_nozzle_head_distance: {
                default_value: number;
            };
            machine_heat_zone_length: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_disallowed_areas: {
                default_value: number[][][];
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    tam: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            layer_height: {
                default_value: number;
            };
            layer_height_0: {
                default_value: number;
            };
            infill_sparse_density: {
                default_value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                default_value: number;
            };
            infill_pattern: {
                value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            speed_print: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            xy_offset: {
                default_value: number;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_nozzle_tip_outer_diameter: {
                default_value: number;
            };
            machine_nozzle_head_distance: {
                default_value: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_max_acceleration_e: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    tevo_blackwidow: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            has_machine_quality: boolean;
            platform: string;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    tevo_tarantula: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            acceleration_print: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    tevo_tarantula_pro: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            layer_height: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            acceleration_print: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    tevo_tornado: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            top_bottom_thickness: {
                default_value: number;
            };
            top_bottom_pattern: {
                default_value: string;
            };
            infill_pattern: {
                value: string;
            };
            retraction_enable: {
                default_value: boolean;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            cool_min_layer_time: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            skirt_line_count: {
                default_value: number;
            };
            skirt_gap: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            acceleration_enabled: {
                default_value: boolean;
            };
            acceleration_print: {
                default_value: number;
            };
            acceleration_travel: {
                value: number;
            };
            acceleration_travel_layer_0: {
                value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            jerk_enabled: {
                default_value: boolean;
            };
            jerk_print: {
                default_value: number;
            };
            jerk_travel: {
                value: number;
            };
            jerk_travel_layer_0: {
                value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    tizyx_evy: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            has_variants: boolean;
            preferred_variant_name: string;
            preferred_material: string;
            preferred_quality_type: string;
            exclude_materials: string[];
            machine_extruder_trains: {
                0: string;
            };
            platform: string;
            platform_offset: number[];
            first_start_actions: string[];
            supported_actions: string[];
        };
        overrides: {
            machine_extruder_count: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            adhesion_type: {
                default_value: string;
            };
            skirt_line_count: {
                default_value: number;
            };
            skirt_gap: {
                default_value: number;
            };
            fill_outline_gaps: {
                default_value: boolean;
            };
            infill_sparse_density: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            cool_min_layer_time: {
                default_value: number;
            };
            layer_height: {
                maximum_value: string;
            };
            layer_height_0: {
                maximum_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            acceleration_enabled: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            z_seam_type: {
                default_value: string;
            };
            z_seam_x: {
                value: string;
            };
            z_seam_y: {
                value: string;
            };
            retraction_combing: {
                default_value: string;
            };
        };
    };
    tizyx_evy_dual: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            has_variants: boolean;
            preferred_variant_name: string;
            preferred_material: string;
            preferred_quality_type: string;
            exclude_materials: string[];
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            platform: string;
            platform_offset: number[];
            first_start_actions: string[];
            supported_actions: string[];
        };
        overrides: {
            machine_extruder_count: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            acceleration_enabled: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            z_seam_type: {
                default_value: string;
            };
            z_seam_x: {
                value: string;
            };
            z_seam_y: {
                value: string;
            };
            retraction_combing: {
                default_value: string;
            };
        };
    };
    tizyx_k25: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            exclude_materials: string[];
            preferred_material: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            has_variants: boolean;
            preferred_variant_name: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            acceleration_enabled: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            z_seam_type: {
                default_value: string;
            };
            z_seam_x: {
                value: string;
            };
            z_seam_y: {
                value: string;
            };
            retraction_combing: {
                default_value: string;
            };
        };
    };
    tronxy_d01: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            quality_definition: string;
            visible: boolean;
            author: string;
            platform: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                value: number;
            };
            machine_max_feedrate_y: {
                value: number;
            };
            machine_max_feedrate_z: {
                value: number;
            };
            machine_max_feedrate_e: {
                value: number;
            };
            machine_max_acceleration_x: {
                value: number;
            };
            machine_max_acceleration_y: {
                value: number;
            };
            machine_max_acceleration_z: {
                value: number;
            };
            machine_max_acceleration_e: {
                value: number;
            };
            machine_acceleration: {
                value: number;
            };
        };
    };
    tronxy_x: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            first_start_actions: string[];
            machine_extruder_trains: {
                0: string;
            };
            has_materials: boolean;
            has_variants: boolean;
            has_machine_quality: boolean;
            variants_name: string;
            preferred_variant_name: string;
            preferred_quality_type: string;
            preferred_material: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                value: number;
            };
            machine_max_feedrate_y: {
                value: number;
            };
            machine_max_feedrate_z: {
                value: number;
            };
            machine_max_feedrate_e: {
                value: number;
            };
            machine_max_acceleration_x: {
                value: number;
            };
            machine_max_acceleration_y: {
                value: number;
            };
            machine_max_acceleration_z: {
                value: number;
            };
            machine_max_acceleration_e: {
                value: number;
            };
            machine_acceleration: {
                value: number;
            };
            machine_max_jerk_xy: {
                value: number;
            };
            machine_max_jerk_z: {
                value: number;
            };
            machine_max_jerk_e: {
                value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            material_diameter: {
                default_value: number;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_travel_layer_0: {
                value: string;
            };
            acceleration_roofing: {
                enabled: string;
            };
            jerk_print: {
                value: number;
            };
            jerk_travel: {
                value: string;
            };
            jerk_travel_layer_0: {
                value: string;
            };
            acceleration_enabled: {
                value: boolean;
            };
            jerk_enabled: {
                value: boolean;
            };
            speed_print: {
                value: number;
            };
            speed_infill: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_roofing: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_layer_0: {
                value: number;
            };
            speed_print_layer_0: {
                value: string;
            };
            speed_travel_layer_0: {
                value: string;
            };
            speed_prime_tower: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_z_hop: {
                value: number;
            };
            skirt_brim_speed: {
                value: string;
            };
            line_width: {
                value: string;
            };
            optimize_wall_printing_order: {
                value: string;
            };
            material_initial_print_temperature: {
                value: string;
            };
            material_final_print_temperature: {
                value: string;
            };
            material_flow: {
                value: number;
            };
            travel_compensate_overlapping_walls_0_enabled: {
                value: string;
            };
            z_seam_type: {
                value: string;
            };
            z_seam_corner: {
                value: string;
            };
            infill_sparse_density: {
                value: string;
            };
            infill_pattern: {
                value: string;
            };
            infill_before_walls: {
                value: boolean;
            };
            infill_overlap: {
                value: number;
            };
            skin_overlap: {
                value: number;
            };
            infill_wipe_dist: {
                value: number;
            };
            wall_0_wipe_dist: {
                value: number;
            };
            fill_perimeter_gaps: {
                value: string;
            };
            fill_outline_gaps: {
                value: boolean;
            };
            filter_out_tiny_gaps: {
                value: boolean;
            };
            retraction_speed: {
                maximum_value_warning: string;
                maximum_value: number;
            };
            retraction_retract_speed: {
                maximum_value_warning: string;
                maximum_value: number;
            };
            retraction_prime_speed: {
                maximum_value_warning: string;
                maximum_value: number;
            };
            retraction_hop_enabled: {
                value: string;
            };
            retraction_hop: {
                value: number;
            };
            retraction_combing: {
                value: string;
            };
            retraction_combing_max_distance: {
                value: number;
            };
            travel_avoid_other_parts: {
                value: boolean;
            };
            travel_avoid_supports: {
                value: boolean;
            };
            travel_retract_before_outer_wall: {
                value: boolean;
            };
            retraction_enable: {
                value: boolean;
            };
            retraction_count_max: {
                value: number;
            };
            retraction_extrusion_window: {
                value: number;
            };
            retraction_min_travel: {
                value: number;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_enabled: {
                value: boolean;
            };
            cool_min_layer_time: {
                value: number;
            };
            adhesion_type: {
                value: string;
            };
            brim_replaces_support: {
                value: boolean;
            };
            skirt_gap: {
                value: number;
            };
            skirt_line_count: {
                value: number;
            };
            adaptive_layer_height_variation: {
                value: number;
            };
            adaptive_layer_height_variation_step: {
                value: number;
            };
            meshfix_maximum_resolution: {
                value: string;
            };
            meshfix_maximum_travel_resolution: {
                value: string;
            };
            support_angle: {
                value: string;
            };
            support_pattern: {
                value: string;
            };
            support_infill_rate: {
                value: string;
            };
            support_use_towers: {
                value: boolean;
            };
            support_xy_distance: {
                value: string;
            };
            support_xy_distance_overhang: {
                value: string;
            };
            support_z_distance: {
                value: string;
            };
            support_xy_overrides_z: {
                value: string;
            };
            support_wall_count: {
                value: number;
            };
            support_brim_enable: {
                value: boolean;
            };
            support_brim_width: {
                value: number;
            };
            support_interface_enable: {
                value: boolean;
            };
            support_interface_height: {
                value: string;
            };
            support_interface_density: {
                value: number;
            };
            support_interface_pattern: {
                value: string;
            };
            support_interface_skip_height: {
                value: number;
            };
            minimum_support_area: {
                value: number;
            };
            minimum_interface_area: {
                value: number;
            };
            top_bottom_thickness: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
        };
    };
    tronxy_x5sa: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            quality_definition: string;
            visible: boolean;
            author: string;
            platform: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    tronxy_x5sa_400: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            quality_definition: string;
            visible: boolean;
            author: string;
            platform: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                value: number;
            };
            machine_max_feedrate_y: {
                value: number;
            };
            machine_max_feedrate_z: {
                value: number;
            };
            machine_max_feedrate_e: {
                value: number;
            };
        };
    };
    tronxy_x5sa_500: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            quality_definition: string;
            visible: boolean;
            author: string;
            platform: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                value: number;
            };
            machine_max_feedrate_y: {
                value: number;
            };
            machine_max_feedrate_z: {
                value: number;
            };
            machine_max_feedrate_e: {
                value: number;
            };
        };
    };
    tronxy_xy2: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            quality_definition: string;
            visible: boolean;
            author: string;
            platform: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                value: number;
            };
            machine_max_feedrate_y: {
                value: number;
            };
            machine_max_feedrate_z: {
                value: number;
            };
            machine_max_feedrate_e: {
                value: number;
            };
            machine_max_acceleration_x: {
                value: number;
            };
            machine_max_acceleration_y: {
                value: number;
            };
            machine_max_acceleration_z: {
                value: number;
            };
            machine_max_acceleration_e: {
                value: number;
            };
            machine_acceleration: {
                value: number;
            };
        };
    };
    tronxy_xy2pro: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            quality_definition: string;
            visible: boolean;
            author: string;
            platform: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                value: number;
            };
            machine_max_feedrate_y: {
                value: number;
            };
            machine_max_feedrate_z: {
                value: number;
            };
            machine_max_feedrate_e: {
                value: number;
            };
            machine_max_acceleration_x: {
                value: number;
            };
            machine_max_acceleration_y: {
                value: number;
            };
            machine_max_acceleration_z: {
                value: number;
            };
            machine_max_acceleration_e: {
                value: number;
            };
            machine_acceleration: {
                value: number;
            };
            machine_max_jerk_xy: {
                value: number;
            };
            machine_max_jerk_z: {
                value: number;
            };
            machine_max_jerk_e: {
                value: number;
            };
        };
    };
    tronxy_xy3: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            quality_definition: string;
            visible: boolean;
            author: string;
            platform: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                value: number;
            };
            machine_max_feedrate_y: {
                value: number;
            };
            machine_max_feedrate_z: {
                value: number;
            };
            machine_max_feedrate_e: {
                value: number;
            };
            machine_max_acceleration_x: {
                value: number;
            };
            machine_max_acceleration_y: {
                value: number;
            };
            machine_max_acceleration_z: {
                value: number;
            };
            machine_max_acceleration_e: {
                value: number;
            };
            machine_acceleration: {
                value: number;
            };
        };
    };
    ubuild_3d_mr_bot_280: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            preferred_quality_type: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            layer_height_0: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    ultimaker: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            exclude_materials: string[];
        };
        overrides: {
            machine_max_feedrate_e: {
                default_value: number;
            };
            material_print_temperature: {
                minimum_value: string;
            };
            material_bed_temperature: {
                minimum_value: string;
                maximum_value_warning: string;
            };
            material_bed_temperature_layer_0: {
                maximum_value_warning: string;
            };
            material_standby_temperature: {
                minimum_value: string;
            };
            extruder_prime_pos_y: {
                minimum_value: string;
                maximum_value: string;
            };
            extruder_prime_pos_x: {
                minimum_value: string;
                maximum_value: string;
            };
            relative_extrusion: {
                value: boolean;
                enabled: boolean;
            };
        };
    };
    ultimaker2: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            weight: number;
            file_formats: string;
            platform: string;
            platform_texture: string;
            platform_offset: number[];
            has_materials: boolean;
            has_machine_quality: boolean;
            preferred_variant_name: string;
            machine_extruder_trains: {
                0: string;
            };
            firmware_file: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                value: string;
            };
            machine_end_gcode: {
                value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_disallowed_areas: {
                default_value: number[][][];
            };
            machine_nozzle_tip_outer_diameter: {
                default_value: number;
            };
            machine_nozzle_head_distance: {
                default_value: number;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
        };
    };
    ultimaker2_extended: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            quality_definition: string;
            weight: number;
            file_formats: string;
            platform: string;
            platform_texture: string;
            machine_extruder_trains: {
                0: string;
            };
            firmware_file: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    ultimaker2_extended_olsson: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            has_variants: boolean;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
        };
    };
    ultimaker2_extended_plus: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            quality_definition: string;
            weight: number;
            file_formats: string;
            platform: string;
            platform_texture: string;
            machine_extruder_trains: {
                0: string;
            };
            firmware_file: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    ultimaker2_go: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            quality_definition: string;
            weight: number;
            file_formats: string;
            platform: string;
            platform_texture: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
            firmware_file: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_disallowed_areas: {
                default_value: number[][][];
            };
        };
    };
    ultimaker2_olsson: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            has_variants: boolean;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
        };
    };
    ultimaker2_plus: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            weight: number;
            file_formats: string;
            platform: string;
            platform_texture: string;
            preferred_variant_name: string;
            has_variants: boolean;
            has_materials: boolean;
            has_machine_quality: boolean;
            exclude_materials: string[];
            first_start_actions: never[];
            supported_actions: never[];
            machine_extruder_trains: {
                0: string;
            };
            firmware_file: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            speed_infill: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            layer_height_0: {
                value: string;
            };
            line_width: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            machine_height: {
                default_value: number;
            };
            machine_show_variants: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_nozzle_head_distance: {
                default_value: number;
            };
            machine_heat_zone_length: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_disallowed_areas: {
                default_value: number[][][];
            };
        };
    };
    ultimaker3: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            platform: string;
            platform_texture: string;
            platform_offset: number[];
            has_machine_quality: boolean;
            has_materials: boolean;
            has_variants: boolean;
            exclude_materials: string[];
            preferred_variant_name: string;
            preferred_quality_type: string;
            variants_name: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            first_start_actions: string[];
            supported_actions: string[];
            supports_usb_connection: boolean;
            supports_network_connection: boolean;
            firmware_update_info: {
                id: number;
                check_urls: string[];
                update_url: string;
            };
            bom_numbers: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            gantry_height: {
                value: string;
            };
            machine_disallowed_areas: {
                default_value: number[][][];
            };
            machine_extruder_count: {
                default_value: number;
            };
            extruder_prime_pos_abs: {
                default_value: boolean;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_wipe_enabled: {
                default_value: boolean;
            };
            prime_blob_enable: {
                enabled: boolean;
                default_value: boolean;
                value: string;
            };
            acceleration_enabled: {
                value: string;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            brim_width: {
                value: string;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_speed: {
                value: string;
            };
            cool_fan_speed_max: {
                value: string;
            };
            cool_min_speed: {
                value: string;
            };
            infill_line_width: {
                value: string;
            };
            infill_overlap: {
                value: string;
            };
            infill_pattern: {
                value: string;
            };
            infill_wipe_dist: {
                value: string;
            };
            initial_layer_line_width_factor: {
                value: string;
            };
            jerk_enabled: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            layer_height_0: {
                value: string;
            };
            layer_start_x: {
                value: string;
            };
            layer_start_y: {
                value: string;
            };
            line_width: {
                value: string;
            };
            machine_min_cool_heat_time_window: {
                value: string;
            };
            default_material_print_temperature: {
                value: string;
            };
            material_print_temperature_layer_0: {
                value: string;
            };
            material_bed_temperature: {
                maximum_value: string;
            };
            material_bed_temperature_layer_0: {
                maximum_value: string;
            };
            material_standby_temperature: {
                value: string;
            };
            multiple_mesh_overlap: {
                value: string;
            };
            optimize_wall_printing_order: {
                value: string;
            };
            prime_tower_enable: {
                default_value: boolean;
            };
            raft_airgap: {
                value: string;
            };
            raft_base_thickness: {
                value: string;
            };
            raft_interface_line_spacing: {
                value: string;
            };
            raft_interface_line_width: {
                value: string;
            };
            raft_interface_thickness: {
                value: string;
            };
            raft_jerk: {
                value: string;
            };
            raft_margin: {
                value: string;
            };
            raft_surface_layers: {
                value: string;
            };
            retraction_amount: {
                value: string;
            };
            retraction_count_max: {
                value: string;
            };
            retraction_extrusion_window: {
                value: string;
            };
            retraction_hop: {
                value: string;
            };
            retraction_hop_enabled: {
                value: string;
            };
            retraction_hop_only_when_collides: {
                value: string;
            };
            retraction_min_travel: {
                value: string;
            };
            retraction_prime_speed: {
                value: string;
            };
            skin_overlap: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_prime_tower: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            support_angle: {
                value: string;
            };
            support_pattern: {
                value: string;
            };
            support_use_towers: {
                value: string;
            };
            support_xy_distance: {
                value: string;
            };
            support_xy_distance_overhang: {
                value: string;
            };
            support_z_distance: {
                value: string;
            };
            switch_extruder_prime_speed: {
                value: string;
            };
            switch_extruder_retraction_amount: {
                value: string;
            };
            top_bottom_thickness: {
                value: string;
            };
            travel_avoid_distance: {
                value: string;
            };
            wall_0_inset: {
                value: string;
            };
            wall_line_width_x: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
            zig_zaggify_infill: {
                value: string;
            };
        };
    };
    ultimaker3_extended: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            quality_definition: string;
            visible: boolean;
            file_formats: string;
            platform: string;
            platform_texture: string;
            platform_offset: number[];
            has_machine_quality: boolean;
            has_materials: boolean;
            has_variants: boolean;
            preferred_variant_name: string;
            variants_name: string;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            first_start_actions: string[];
            supported_actions: string[];
            firmware_update_info: {
                id: number;
                check_urls: string[];
                update_url: string;
            };
            bom_numbers: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    ultimaker_original: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            weight: number;
            file_formats: string;
            platform: string;
            has_materials: boolean;
            has_machine_quality: boolean;
            exclude_materials: string[];
            first_start_actions: string[];
            supported_actions: string[];
            machine_extruder_trains: {
                0: string;
            };
            firmware_file: string;
            firmware_hbk_file: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                value: string;
            };
        };
    };
    ultimaker_original_dual: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            weight: number;
            file_formats: string;
            platform: string;
            has_materials: boolean;
            has_machine_quality: boolean;
            quality_definition: string;
            exclude_materials: string[];
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            firmware_file: string;
            firmware_hbk_file: string;
            first_start_actions: string[];
            supported_actions: string[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            prime_tower_position_x: {
                value: string;
            };
            prime_tower_position_y: {
                value: string;
            };
        };
    };
    ultimaker_original_plus: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            weight: number;
            file_formats: string;
            platform: string;
            platform_texture: string;
            quality_definition: string;
            first_start_actions: string[];
            supported_actions: string[];
            machine_extruder_trains: {
                0: string;
            };
            firmware_file: string;
            firmware_hbk_file: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
        };
    };
    ultimaker_s3: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            platform: string;
            platform_texture: string;
            platform_offset: number[];
            has_machine_quality: boolean;
            has_materials: boolean;
            has_variant_buildplates: boolean;
            has_variants: boolean;
            exclude_materials: string[];
            preferred_variant_name: string;
            preferred_quality_type: string;
            variants_name: string;
            nozzle_offsetting_for_disallowed_areas: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            first_start_actions: string[];
            supported_actions: string[];
            supports_usb_connection: boolean;
            weight: number;
            firmware_update_info: {
                id: number;
                check_urls: string[];
                update_url: string;
            };
            bom_numbers: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            gantry_height: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            extruder_prime_pos_abs: {
                default_value: boolean;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            prime_blob_enable: {
                enabled: boolean;
                default_value: boolean;
            };
            speed_travel: {
                maximum_value: string;
                value: string;
            };
            acceleration_enabled: {
                value: string;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            brim_width: {
                value: string;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_speed: {
                value: string;
            };
            cool_fan_speed_max: {
                value: string;
            };
            cool_min_speed: {
                value: string;
            };
            infill_line_width: {
                value: string;
            };
            infill_overlap: {
                value: string;
            };
            infill_pattern: {
                value: string;
            };
            infill_wipe_dist: {
                value: string;
            };
            jerk_enabled: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            layer_height_0: {
                value: string;
            };
            layer_start_x: {
                value: string;
            };
            layer_start_y: {
                value: string;
            };
            line_width: {
                value: string;
            };
            machine_min_cool_heat_time_window: {
                value: string;
            };
            default_material_print_temperature: {
                value: string;
            };
            material_standby_temperature: {
                value: string;
            };
            multiple_mesh_overlap: {
                value: string;
            };
            prime_tower_enable: {
                value: string;
            };
            raft_airgap: {
                value: string;
            };
            raft_base_speed: {
                value: string;
            };
            raft_base_thickness: {
                value: string;
            };
            raft_interface_line_spacing: {
                value: string;
            };
            raft_interface_line_width: {
                value: string;
            };
            raft_interface_speed: {
                value: string;
            };
            raft_interface_thickness: {
                value: string;
            };
            raft_jerk: {
                value: string;
            };
            raft_margin: {
                value: string;
            };
            raft_speed: {
                value: string;
            };
            raft_surface_layers: {
                value: string;
            };
            retraction_amount: {
                value: string;
            };
            retraction_count_max: {
                value: string;
            };
            retraction_extrusion_window: {
                value: string;
            };
            retraction_hop: {
                value: string;
            };
            retraction_hop_enabled: {
                value: string;
            };
            retraction_hop_only_when_collides: {
                value: string;
            };
            retraction_min_travel: {
                value: string;
            };
            retraction_prime_speed: {
                value: string;
            };
            skin_overlap: {
                value: string;
            };
            speed_equalize_flow_enabled: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_prime_tower: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            support_angle: {
                value: string;
            };
            support_pattern: {
                value: string;
            };
            support_use_towers: {
                value: string;
            };
            support_xy_distance: {
                value: string;
            };
            support_xy_distance_overhang: {
                value: string;
            };
            support_z_distance: {
                value: string;
            };
            switch_extruder_prime_speed: {
                value: string;
            };
            switch_extruder_retraction_amount: {
                value: string;
            };
            top_bottom_thickness: {
                value: string;
            };
            travel_avoid_supports: {
                value: string;
            };
            travel_avoid_distance: {
                value: string;
            };
            wall_0_inset: {
                value: string;
            };
            wall_line_width_x: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
            meshfix_maximum_resolution: {
                value: string;
            };
            meshfix_maximum_deviation: {
                value: string;
            };
            optimize_wall_printing_order: {
                value: string;
            };
            retraction_combing: {
                default_value: string;
            };
            initial_layer_line_width_factor: {
                value: string;
            };
            zig_zaggify_infill: {
                value: string;
            };
        };
    };
    ultimaker_s5: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            platform: string;
            platform_texture: string;
            platform_offset: number[];
            has_machine_quality: boolean;
            has_materials: boolean;
            has_variant_buildplates: boolean;
            has_variants: boolean;
            preferred_variant_name: string;
            preferred_variant_buildplate_name: string;
            preferred_quality_type: string;
            variants_name: string;
            nozzle_offsetting_for_disallowed_areas: boolean;
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            first_start_actions: string[];
            supported_actions: string[];
            supports_usb_connection: boolean;
            supports_network_connection: boolean;
            weight: number;
            firmware_update_info: {
                id: number;
                check_urls: string[];
                update_url: string;
            };
            bom_numbers: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_heated_build_volume: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            gantry_height: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            extruder_prime_pos_abs: {
                default_value: boolean;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            prime_blob_enable: {
                enabled: boolean;
                default_value: boolean;
            };
            speed_travel: {
                maximum_value: string;
                value: string;
            };
            acceleration_enabled: {
                value: string;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            brim_width: {
                value: string;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_speed: {
                value: string;
            };
            cool_fan_speed_max: {
                value: string;
            };
            cool_min_speed: {
                value: string;
            };
            infill_line_width: {
                value: string;
            };
            infill_overlap: {
                value: string;
            };
            infill_pattern: {
                value: string;
            };
            infill_wipe_dist: {
                value: string;
            };
            jerk_enabled: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            layer_height_0: {
                value: string;
            };
            layer_start_x: {
                value: string;
            };
            layer_start_y: {
                value: string;
            };
            line_width: {
                value: string;
            };
            machine_min_cool_heat_time_window: {
                value: string;
            };
            default_material_print_temperature: {
                value: string;
            };
            material_standby_temperature: {
                value: string;
            };
            multiple_mesh_overlap: {
                value: string;
            };
            prime_tower_enable: {
                value: string;
            };
            raft_airgap: {
                value: string;
            };
            raft_base_speed: {
                value: string;
            };
            raft_base_thickness: {
                value: string;
            };
            raft_interface_line_spacing: {
                value: string;
            };
            raft_interface_line_width: {
                value: string;
            };
            raft_interface_speed: {
                value: string;
            };
            raft_interface_thickness: {
                value: string;
            };
            raft_jerk: {
                value: string;
            };
            raft_margin: {
                value: string;
            };
            raft_speed: {
                value: string;
            };
            raft_surface_layers: {
                value: string;
            };
            retraction_amount: {
                value: string;
            };
            retraction_count_max: {
                value: string;
            };
            retraction_extrusion_window: {
                value: string;
            };
            retraction_hop: {
                value: string;
            };
            retraction_hop_enabled: {
                value: string;
            };
            retraction_hop_only_when_collides: {
                value: string;
            };
            retraction_min_travel: {
                value: string;
            };
            retraction_prime_speed: {
                value: string;
            };
            skin_overlap: {
                value: string;
            };
            speed_equalize_flow_enabled: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_prime_tower: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            support_angle: {
                value: string;
            };
            support_pattern: {
                value: string;
            };
            support_use_towers: {
                value: string;
            };
            support_xy_distance: {
                value: string;
            };
            support_xy_distance_overhang: {
                value: string;
            };
            support_z_distance: {
                value: string;
            };
            switch_extruder_prime_speed: {
                value: string;
            };
            switch_extruder_retraction_amount: {
                value: string;
            };
            top_bottom_thickness: {
                value: string;
            };
            travel_avoid_supports: {
                value: string;
            };
            travel_avoid_distance: {
                value: string;
            };
            wall_0_inset: {
                value: string;
            };
            wall_line_width_x: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
            meshfix_maximum_resolution: {
                value: string;
            };
            meshfix_maximum_deviation: {
                value: string;
            };
            optimize_wall_printing_order: {
                value: string;
            };
            retraction_combing: {
                default_value: string;
            };
            initial_layer_line_width_factor: {
                value: string;
            };
            zig_zaggify_infill: {
                value: string;
            };
            build_volume_temperature: {
                maximum_value: number;
            };
        };
    };
    uniqbot_one: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            file_formats: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    uni_200: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            author: string;
            visible: boolean;
            quality_definition: string;
            platform: string;
            platform_texture: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    uni_250: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            author: string;
            visible: boolean;
            quality_definition: string;
            platform: string;
            platform_texture: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    uni_300: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            author: string;
            visible: boolean;
            quality_definition: string;
            platform: string;
            platform_texture: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    uni_base: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            first_start_actions: string[];
            machine_extruder_trains: {
                0: string;
                1: string;
            };
            has_materials: boolean;
            preferred_material: string;
            has_variants: boolean;
            variants_name: string;
            preferred_variant_name: string;
            has_machine_quality: boolean;
            preferred_quality_type: string;
            exclude_materials: string[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            material_diameter: {
                default_value: number;
            };
            machine_shape: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_extruder_count: {
                value: number;
            };
            machine_buildplate_type: {
                value: string;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: number;
            };
            layer_height_0: {
                value: string;
            };
            line_width: {
                value: string;
            };
            skin_line_width: {
                value: string;
            };
            infill_line_width: {
                value: string;
            };
            skirt_brim_line_width: {
                value: string;
            };
            initial_layer_line_width_factor: {
                value: string;
            };
            bottom_thickness: {
                value: string;
            };
            top_bottom_pattern: {
                value: string;
            };
            top_bottom_pattern_0: {
                value: string;
            };
            optimize_wall_printing_order: {
                value: string;
            };
            z_seam_type: {
                value: string;
            };
            skin_outline_count: {
                value: string;
            };
            infill_pattern: {
                value: string;
            };
            zig_zaggify_infill: {
                value: string;
            };
            infill_before_walls: {
                value: string;
            };
            infill_enable_travel_optimization: {
                value: string;
            };
            expand_skins_expand_distance: {
                value: string;
            };
            retraction_min_travel: {
                value: string;
            };
            retraction_amount: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_travel_layer_0: {
                value: string;
            };
            retraction_combing: {
                value: string;
            };
            retraction_combing_max_distance: {
                value: string;
            };
            travel_avoid_other_parts: {
                value: string;
            };
            cool_min_layer_time_fan_speed_max: {
                value: string;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_min_layer_time: {
                value: string;
            };
            cool_min_speed: {
                value: string;
            };
            cool_lift_head: {
                value: string;
            };
            support_enable: {
                value: string;
            };
            support_angle: {
                value: string;
            };
            support_brim_enable: {
                value: string;
            };
            support_infill_rate: {
                value: string;
            };
            support_offset: {
                value: string;
            };
            adhesion_type: {
                value: string;
            };
            brim_width: {
                value: string;
            };
            bridge_settings_enabled: {
                value: string;
            };
        };
    };
    uni_mini: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            author: string;
            visible: boolean;
            quality_definition: string;
            platform: string;
            platform_texture: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    uni_print_3d: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    vertex_delta_k8800: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            manufacturer: string;
            file_formats: string;
            visible: boolean;
            author: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_shape: {
                default_value: string;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            line_width: {
                value: number;
            };
            infill_line_width: {
                value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                value: number;
            };
            infill_sparse_density: {
                value: number;
            };
            infill_overlap: {
                value: number;
            };
            min_infill_area: {
                value: number;
            };
            retract_at_layer_change: {
                value: boolean;
            };
            retraction_min_travel: {
                value: number;
            };
            retraction_count_max: {
                value: number;
            };
            retraction_extrusion_window: {
                value: number;
            };
            speed_print: {
                value: number;
            };
            speed_infill: {
                value: number;
            };
            speed_wall: {
                value: number;
            };
            speed_wall_x: {
                value: number;
            };
            speed_topbottom: {
                value: number;
            };
            speed_travel: {
                value: number;
            };
            speed_layer_0: {
                value: number;
            };
            speed_print_layer_0: {
                value: number;
            };
            skirt_brim_speed: {
                value: number;
            };
            travel_retract_before_outer_wall: {
                value: boolean;
            };
            retraction_hop_enabled: {
                value: boolean;
            };
            retraction_hop: {
                value: number;
            };
            cool_fan_full_at_height: {
                value: number;
            };
            cool_fan_full_layer: {
                value: number;
            };
            cool_min_layer_time: {
                value: number;
            };
            support_z_distance: {
                value: number;
            };
            support_xy_distance: {
                value: number;
            };
            brim_width: {
                value: number;
            };
            skirt_line_count: {
                value: number;
            };
            skirt_brim_minimal_length: {
                value: number;
            };
        };
    };
    vertex_k8400: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            supports_usb_connection: boolean;
            supported_actions: string[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_disallowed_areas: {
                default_value: number[][][];
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    vertex_k8400_dual: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            manufacturer: string;
            file_formats: string;
            platform: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
                1: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_disallowed_areas: {
                default_value: number[][][];
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    vertex_nano_k8600: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            manufacturer: string;
            file_formats: string;
            supports_usb_connection: boolean;
            supported_actions: string[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            line_width: {
                value: number;
            };
            infill_line_width: {
                value: number;
            };
            wall_thickness: {
                value: string;
            };
            top_bottom_thickness: {
                value: number;
            };
            infill_sparse_density: {
                value: number;
            };
            infill_overlap: {
                value: number;
            };
            min_infill_area: {
                value: number;
            };
            retract_at_layer_change: {
                value: boolean;
            };
            retraction_min_travel: {
                value: number;
            };
            retraction_count_max: {
                value: number;
            };
            retraction_extrusion_window: {
                value: number;
            };
        };
    };
    voron2_250: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    voron2_300: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    voron2_350: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            platform: string;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
        };
    };
    voron2_base: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            first_start_actions: string[];
            preferred_quality_type: string;
            has_machine_quality: boolean;
            has_materials: boolean;
            has_variants: boolean;
            variants_name: string;
            preferred_variant_name: string;
            machine_extruder_trains: {
                0: string;
            };
            preferred_material: string;
            exclude_materials: string[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            gantry_height: {
                value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_max_acceleration_x: {
                default_value: number;
            };
            machine_max_acceleration_y: {
                default_value: number;
            };
            machine_max_acceleration_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            machine_max_jerk_xy: {
                default_value: number;
            };
            machine_max_jerk_z: {
                default_value: number;
            };
            machine_max_jerk_e: {
                default_value: number;
            };
            machine_steps_per_mm_x: {
                default_value: number;
            };
            machine_steps_per_mm_y: {
                default_value: number;
            };
            machine_steps_per_mm_z: {
                default_value: number;
            };
            machine_endstop_positive_direction_x: {
                default_value: boolean;
            };
            machine_endstop_positive_direction_y: {
                default_value: boolean;
            };
            machine_endstop_positive_direction_z: {
                default_value: boolean;
            };
            machine_feeder_wheel_diameter: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_max_feedrate_e: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            adhesion_type: {
                default_value: string;
            };
            skirt_brim_minimal_length: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
                maximum_value_warning: number;
            };
            retraction_retract_speed: {
                maximum_value_warning: number;
            };
            retraction_prime_speed: {
                value: string;
                maximum_value_warning: number;
            };
            retraction_hop_enabled: {
                default_value: boolean;
            };
            retraction_hop: {
                default_value: number;
            };
            retraction_combing: {
                default_value: string;
            };
            retraction_combing_max_distance: {
                default_value: number;
            };
            travel_avoid_other_parts: {
                default_value: boolean;
            };
            speed_travel: {
                maximum_value: number;
                value: number;
                maximum_value_warning: number;
            };
            speed_travel_layer_0: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_roofing: {
                value: string;
            };
            speed_slowdown_layers: {
                default_value: number;
            };
            roofing_layer_count: {
                value: number;
            };
            optimize_wall_printing_order: {
                default_value: boolean;
            };
            infill_enable_travel_optimization: {
                default_value: boolean;
            };
            minimum_polygon_circumference: {
                default_value: number;
            };
            wall_overhang_angle: {
                default_value: number;
            };
            wall_overhang_speed_factor: {
                default_value: number;
            };
            bridge_settings_enabled: {
                default_value: boolean;
            };
            bridge_wall_coast: {
                default_value: number;
            };
            bridge_fan_speed: {
                default_value: number;
            };
            bridge_fan_speed_2: {
                resolve: string;
            };
            bridge_fan_speed_3: {
                resolve: string;
            };
            alternate_extra_perimeter: {
                default_value: boolean;
            };
            cool_min_layer_time_fan_speed_max: {
                default_value: number;
            };
            cool_min_layer_time: {
                default_value: number;
            };
            cool_fan_speed_min: {
                value: string;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_full_layer: {
                value: number;
            };
            layer_height_0: {
                resolve: string;
            };
            line_width: {
                value: string;
            };
            wall_line_width: {
                value: string;
            };
            fill_perimeter_gaps: {
                default_value: string;
            };
            fill_outline_gaps: {
                default_value: boolean;
            };
            meshfix_maximum_resolution: {
                default_value: number;
            };
            infill_before_walls: {
                default_value: boolean;
            };
            zig_zaggify_infill: {
                value: boolean;
            };
            min_infill_area: {
                default_value: number;
            };
            acceleration_enabled: {
                default_value: boolean;
            };
            acceleration_print: {
                default_value: number;
            };
            acceleration_wall_0: {
                value: number;
            };
            acceleration_layer_0: {
                value: number;
            };
            acceleration_travel_layer_0: {
                value: number;
            };
            acceleration_roofing: {
                value: number;
            };
            jerk_enabled: {
                default_value: boolean;
            };
            jerk_wall_0: {
                value: number;
            };
            jerk_roofing: {
                value: number;
            };
        };
    };
    voron2_custom: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            quality_definition: string;
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
        };
    };
    wanhao_d4s: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            platform: string;
            platform_texture: string;
            machine_extruder_trains: {
                0: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    wanhao_d6: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            platform: string;
            platform_texture: string;
            machine_extruder_trains: {
                0: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            gantry_height: {
                value: string;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    wanhao_d6_plus: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            platform: string;
            platform_texture: string;
            machine_extruder_trains: {
                0: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    wanhao_d9: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            platform: string;
            platform_texture: string;
            machine_extruder_trains: {
                0: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            support_angle: {
                default_value: number;
            };
            support_enable: {
                default_value: boolean;
            };
            layer_height_0: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            adhesion_type: {
                default_value: string;
            };
            support_z_distance: {
                default_value: number;
            };
        };
    };
    wanhao_duplicator5S: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            platform: string;
            platform_texture: string;
            machine_extruder_trains: {
                0: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    wanhao_duplicator5Smini: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            platform: string;
            platform_texture: string;
            machine_extruder_trains: {
                0: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    wanhao_i3: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            platform: string;
            platform_texture: string;
            machine_extruder_trains: {
                0: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    wanhao_i3mini: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            platform: string;
            platform_texture: string;
            machine_extruder_trains: {
                0: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    wanhao_i3plus: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            has_materials: boolean;
            platform: string;
            platform_texture: string;
            machine_extruder_trains: {
                0: string;
            };
            platform_offset: number[];
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    winbo_dragonl4: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            material_bed_temp_wait: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            gantry_height: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            prime_blob_enable: {
                enabled: boolean;
            };
            acceleration_enabled: {
                value: string;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            brim_width: {
                value: string;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_speed: {
                value: string;
            };
            cool_fan_speed_max: {
                value: string;
            };
            cool_min_speed: {
                value: string;
            };
            fill_outline_gaps: {
                value: string;
            };
            infill_overlap: {
                value: string;
            };
            min_infill_area: {
                value: string;
            };
            min_skin_width_for_expansion: {
                value: string;
            };
            jerk_enabled: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
            line_width: {
                value: string;
            };
            wall_0_inset: {
                value: string;
            };
            wall_line_width_x: {
                value: string;
            };
            wall_line_width_0: {
                value: string;
            };
            support_line_width: {
                value: string;
            };
            support_interface_line_width: {
                value: string;
            };
            machine_min_cool_heat_time_window: {
                value: string;
            };
            default_material_print_temperature: {
                value: string;
            };
            material_print_temperature_layer_0: {
                value: string;
            };
            material_bed_temperature: {
                maximum_value: string;
            };
            material_bed_temperature_layer_0: {
                maximum_value: string;
            };
            raft_airgap: {
                value: string;
            };
            raft_base_thickness: {
                value: string;
            };
            raft_interface_line_spacing: {
                value: string;
            };
            raft_interface_line_width: {
                value: string;
            };
            raft_interface_thickness: {
                value: string;
            };
            raft_jerk: {
                value: string;
            };
            raft_margin: {
                value: string;
            };
            raft_surface_layers: {
                value: string;
            };
            retraction_amount: {
                value: string;
            };
            retraction_count_max: {
                value: string;
            };
            retraction_extrusion_window: {
                value: string;
            };
            retraction_hop: {
                value: string;
            };
            retraction_hop_enabled: {
                value: string;
            };
            retraction_hop_only_when_collides: {
                value: string;
            };
            retraction_min_travel: {
                value: string;
            };
            retraction_prime_speed: {
                value: string;
            };
            skin_overlap: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_infill: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            speed_equalize_flow_enabled: {
                value: string;
            };
            support_angle: {
                value: string;
            };
            support_xy_distance: {
                value: string;
            };
            support_z_distance: {
                value: string;
            };
            support_bottom_distance: {
                value: string;
            };
            top_bottom_thickness: {
                value: string;
            };
            travel_avoid_distance: {
                value: string;
            };
            gradual_support_infill_step_height: {
                value: string;
            };
            gradual_support_infill_steps: {
                value: string;
            };
            infill_sparse_density: {
                value: string;
            };
            gradual_infill_step_height: {
                value: string;
            };
            initial_layer_line_width_factor: {
                value: string;
            };
            jerk_travel: {
                value: string;
            };
            support_bottom_enable: {
                value: string;
            };
            support_bottom_height: {
                value: string;
            };
            support_bottom_pattern: {
                value: string;
            };
            support_connect_zigzags: {
                value: string;
            };
            support_infill_rate: {
                value: string;
            };
            support_interface_density: {
                value: string;
            };
            support_interface_enable: {
                value: string;
            };
            support_interface_height: {
                value: string;
            };
            support_roof_pattern: {
                value: string;
            };
            z_seam_type: {
                value: string;
            };
            speed_equalize_flow_max: {
                value: string;
            };
        };
    };
    winbo_mini2: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            material_bed_temp_wait: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            gantry_height: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            prime_blob_enable: {
                enabled: boolean;
            };
            acceleration_enabled: {
                value: string;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            brim_width: {
                value: string;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_speed: {
                value: string;
            };
            cool_fan_speed_max: {
                value: string;
            };
            cool_min_speed: {
                value: string;
            };
            fill_outline_gaps: {
                value: string;
            };
            infill_overlap: {
                value: string;
            };
            min_infill_area: {
                value: string;
            };
            min_skin_width_for_expansion: {
                value: string;
            };
            jerk_enabled: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
            line_width: {
                value: string;
            };
            wall_0_inset: {
                value: string;
            };
            wall_line_width_x: {
                value: string;
            };
            wall_line_width_0: {
                value: string;
            };
            support_line_width: {
                value: string;
            };
            support_interface_line_width: {
                value: string;
            };
            machine_min_cool_heat_time_window: {
                value: string;
            };
            default_material_print_temperature: {
                value: string;
            };
            material_print_temperature_layer_0: {
                value: string;
            };
            material_bed_temperature: {
                maximum_value: string;
            };
            material_bed_temperature_layer_0: {
                maximum_value: string;
            };
            raft_airgap: {
                value: string;
            };
            raft_base_thickness: {
                value: string;
            };
            raft_interface_line_spacing: {
                value: string;
            };
            raft_interface_line_width: {
                value: string;
            };
            raft_interface_thickness: {
                value: string;
            };
            raft_jerk: {
                value: string;
            };
            raft_margin: {
                value: string;
            };
            raft_surface_layers: {
                value: string;
            };
            retraction_amount: {
                value: string;
            };
            retraction_count_max: {
                value: string;
            };
            retraction_extrusion_window: {
                value: string;
            };
            retraction_hop: {
                value: string;
            };
            retraction_hop_enabled: {
                value: string;
            };
            retraction_hop_only_when_collides: {
                value: string;
            };
            retraction_min_travel: {
                value: string;
            };
            retraction_prime_speed: {
                value: string;
            };
            skin_overlap: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_infill: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            speed_equalize_flow_enabled: {
                value: string;
            };
            support_angle: {
                value: string;
            };
            support_xy_distance: {
                value: string;
            };
            support_z_distance: {
                value: string;
            };
            support_bottom_distance: {
                value: string;
            };
            top_bottom_thickness: {
                value: string;
            };
            travel_avoid_distance: {
                value: string;
            };
            gradual_support_infill_step_height: {
                value: string;
            };
            gradual_support_infill_steps: {
                value: string;
            };
            infill_sparse_density: {
                value: string;
            };
            gradual_infill_step_height: {
                value: string;
            };
            initial_layer_line_width_factor: {
                value: string;
            };
            jerk_travel: {
                value: string;
            };
            support_bottom_enable: {
                value: string;
            };
            support_bottom_height: {
                value: string;
            };
            support_bottom_pattern: {
                value: string;
            };
            support_connect_zigzags: {
                value: string;
            };
            support_infill_rate: {
                value: string;
            };
            support_interface_density: {
                value: string;
            };
            support_interface_enable: {
                value: string;
            };
            support_interface_height: {
                value: string;
            };
            support_roof_pattern: {
                value: string;
            };
            z_seam_type: {
                value: string;
            };
            speed_equalize_flow_max: {
                value: string;
            };
        };
    };
    winbo_superhelper105: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            material_bed_temp_wait: {
                default_value: boolean;
            };
            machine_nozzle_heat_up_speed: {
                default_value: number;
            };
            machine_nozzle_cool_down_speed: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_max_feedrate_x: {
                default_value: number;
            };
            machine_max_feedrate_y: {
                default_value: number;
            };
            machine_max_feedrate_z: {
                default_value: number;
            };
            machine_acceleration: {
                default_value: number;
            };
            gantry_height: {
                value: string;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            prime_blob_enable: {
                enabled: boolean;
            };
            acceleration_enabled: {
                value: string;
            };
            acceleration_layer_0: {
                value: string;
            };
            acceleration_prime_tower: {
                value: string;
            };
            acceleration_print: {
                value: string;
            };
            acceleration_travel: {
                value: string;
            };
            acceleration_support: {
                value: string;
            };
            acceleration_support_interface: {
                value: string;
            };
            acceleration_topbottom: {
                value: string;
            };
            acceleration_wall: {
                value: string;
            };
            acceleration_wall_0: {
                value: string;
            };
            brim_width: {
                value: string;
            };
            cool_fan_full_at_height: {
                value: string;
            };
            cool_fan_speed: {
                value: string;
            };
            cool_fan_speed_max: {
                value: string;
            };
            cool_min_speed: {
                value: string;
            };
            fill_outline_gaps: {
                value: string;
            };
            infill_overlap: {
                value: string;
            };
            min_infill_area: {
                value: string;
            };
            min_skin_width_for_expansion: {
                value: string;
            };
            jerk_enabled: {
                value: string;
            };
            jerk_layer_0: {
                value: string;
            };
            jerk_prime_tower: {
                value: string;
            };
            jerk_print: {
                value: string;
            };
            jerk_support: {
                value: string;
            };
            jerk_support_interface: {
                value: string;
            };
            jerk_topbottom: {
                value: string;
            };
            jerk_wall: {
                value: string;
            };
            jerk_wall_0: {
                value: string;
            };
            wall_thickness: {
                value: string;
            };
            line_width: {
                value: string;
            };
            raft_base_thickness: {
                value: string;
            };
            raft_interface_line_spacing: {
                value: string;
            };
            raft_interface_line_width: {
                value: string;
            };
            raft_interface_thickness: {
                value: string;
            };
            raft_jerk: {
                value: string;
            };
            raft_margin: {
                value: string;
            };
            raft_surface_layers: {
                value: string;
            };
            retraction_amount: {
                value: string;
            };
            retraction_count_max: {
                value: string;
            };
            retraction_extrusion_window: {
                value: string;
            };
            retraction_hop: {
                value: string;
            };
            retraction_hop_enabled: {
                value: string;
            };
            retraction_hop_only_when_collides: {
                value: string;
            };
            retraction_min_travel: {
                value: string;
            };
            retraction_prime_speed: {
                value: string;
            };
            skin_overlap: {
                value: string;
            };
            speed_layer_0: {
                value: string;
            };
            speed_print: {
                value: string;
            };
            speed_support: {
                value: string;
            };
            speed_support_interface: {
                value: string;
            };
            speed_topbottom: {
                value: string;
            };
            speed_travel: {
                value: string;
            };
            speed_infill: {
                value: string;
            };
            speed_wall: {
                value: string;
            };
            speed_wall_0: {
                value: string;
            };
            speed_wall_x: {
                value: string;
            };
            speed_equalize_flow_enabled: {
                value: string;
            };
            support_angle: {
                value: string;
            };
            support_xy_distance: {
                value: string;
            };
            support_z_distance: {
                value: string;
            };
            support_bottom_distance: {
                value: string;
            };
            top_bottom_thickness: {
                value: string;
            };
            travel_avoid_distance: {
                value: string;
            };
            gradual_support_infill_step_height: {
                value: string;
            };
            gradual_support_infill_steps: {
                value: string;
            };
            infill_sparse_density: {
                value: string;
            };
            gradual_infill_step_height: {
                value: string;
            };
            initial_layer_line_width_factor: {
                value: string;
            };
            jerk_travel: {
                value: string;
            };
            support_bottom_enable: {
                value: string;
            };
            support_bottom_height: {
                value: string;
            };
            support_bottom_pattern: {
                value: string;
            };
            support_connect_zigzags: {
                value: string;
            };
            support_infill_rate: {
                value: string;
            };
            support_interface_density: {
                value: string;
            };
            support_interface_enable: {
                value: string;
            };
            support_interface_height: {
                value: string;
            };
            support_roof_pattern: {
                value: string;
            };
            z_seam_type: {
                value: string;
            };
            speed_equalize_flow_max: {
                value: string;
            };
        };
    };
    winbo_superhelper155: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            author: string;
            manufacturer: string;
            visible: boolean;
            file_formats: string;
            supports_usb_connection: boolean;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
        };
    };
    z_bolt_classic: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    z_bolt_plus: {
        version: number;
        name: string;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_width: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_use_extruder_offset_to_offset_coords: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
        };
    };
    zone3d_printer: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform_offset: number[];
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            prime_tower_size: {
                default_value: number;
            };
            layer_height: {
                default_value: number;
            };
            machine_extruder_count: {
                default_value: number;
            };
            machine_heated_bed: {
                default_value: boolean;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_height: {
                default_value: number;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_depth: {
                default_value: number;
            };
            machine_width: {
                default_value: number;
            };
            machine_name: {
                default_value: string;
            };
        };
    };
    zyyx_agile: {
        name: string;
        version: number;
        inherits: string;
        metadata: {
            visible: boolean;
            author: string;
            manufacturer: string;
            file_formats: string;
            platform: string;
            has_machine_quality: boolean;
            quality_definition: string;
            preferred_material: string;
            preferred_quality_type: string;
            machine_x3g_variant: string;
            machine_extruder_trains: {
                0: string;
            };
        };
        overrides: {
            machine_name: {
                default_value: string;
            };
            machine_start_gcode: {
                default_value: string;
            };
            machine_end_gcode: {
                default_value: string;
            };
            machine_width: {
                default_value: number;
            };
            machine_depth: {
                default_value: number;
            };
            machine_height: {
                default_value: number;
            };
            machine_center_is_zero: {
                default_value: boolean;
            };
            machine_gcode_flavor: {
                default_value: string;
            };
            machine_head_with_fans_polygon: {
                default_value: number[][];
            };
            gantry_height: {
                value: string;
            };
            machine_steps_per_mm_x: {
                default_value: number;
            };
            machine_steps_per_mm_y: {
                default_value: number;
            };
            machine_steps_per_mm_z: {
                default_value: number;
            };
            machine_steps_per_mm_e: {
                default_value: number;
            };
            retraction_amount: {
                default_value: number;
            };
            retraction_speed: {
                default_value: number;
            };
            speed_print: {
                default_value: number;
            };
            speed_wall: {
                value: number;
            };
            speed_wall_x: {
                value: number;
            };
            speed_travel: {
                value: number;
            };
            speed_layer_0: {
                value: number;
            };
            support_interface_enable: {
                default_value: boolean;
            };
            support_interface_height: {
                default_value: number;
            };
            support_interface_density: {
                default_value: number;
            };
            support_interface_pattern: {
                default_value: string;
            };
            infill_overlap: {
                value: string;
            };
            retract_at_layer_change: {
                default_value: boolean;
            };
            travel_retract_before_outer_wall: {
                default_value: boolean;
            };
            material_initial_print_temperature: {
                value: string;
            };
            material_final_print_temperature: {
                value: string;
            };
            travel_avoid_other_parts: {
                default_value: boolean;
            };
            raft_airgap: {
                default_value: number;
            };
            raft_margin: {
                default_value: number;
            };
        };
    };
};
export default _default;
