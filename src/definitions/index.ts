/* eslint-disable camelcase */
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

//Imports
import _101Hero from './101Hero.def.json';
import _3dator from './3dator.def.json';
import _3dtech_semi_professional from './3dtech_semi_professional.def.json';
import abax_pri3 from './abax_pri3.def.json';
import abax_pri5 from './abax_pri5.def.json';
import abax_titan from './abax_titan.def.json';
import alfawise_u20 from './alfawise_u20.def.json';
import alfawise_u30 from './alfawise_u30.def.json';
import alya3dp from './alya3dp.def.json';
import alyanx3dp from './alyanx3dp.def.json';
import anet3d from './anet3d.def.json';
import anet3d_a2 from './anet3d_a2.def.json';
import anet3d_a2_plus from './anet3d_a2_plus.def.json';
import anet3d_a6 from './anet3d_a6.def.json';
import anet3d_a8 from './anet3d_a8.def.json';
import anet3d_a8_plus from './anet3d_a8_plus.def.json';
import anet3d_e10 from './anet3d_e10.def.json';
import anet3d_e12 from './anet3d_e12.def.json';
import anet3d_e16 from './anet3d_e16.def.json';
import anet3d_et4 from './anet3d_et4.def.json';
import anet3d_et4_pro from './anet3d_et4_pro.def.json';
import anet3d_et4_x from './anet3d_et4_x.def.json';
import anet3d_et5 from './anet3d_et5.def.json';
import anet3d_et5_x from './anet3d_et5_x.def.json';
import anycubic_4max from './anycubic_4max.def.json';
import anycubic_chiron from './anycubic_chiron.def.json';
import anycubic_i3_mega from './anycubic_i3_mega.def.json';
import anycubic_kossel from './anycubic_kossel.def.json';
import anycubic_kossel_linear_plus from './anycubic_kossel_linear_plus.def.json';
import anycubic_kossel_pulley from './anycubic_kossel_pulley.def.json';
import anycubic_mega_zero from './anycubic_mega_zero.def.json';
import artillery_base from './artillery_base.def.json';
import artillery_genius from './artillery_genius.def.json';
import artillery_sidewinder_x1 from './artillery_sidewinder_x1.def.json';
import atmat_asterion from './atmat_asterion.def.json';
import atmat_asterion_ht from './atmat_asterion_ht.def.json';
import atmat_galaxy_500 from './atmat_galaxy_500.def.json';
import atmat_galaxy_600 from './atmat_galaxy_600.def.json';
import atmat_signal_pro_300_v1 from './atmat_signal_pro_300_v1.def.json';
import atmat_signal_pro_300_v2 from './atmat_signal_pro_300_v2.def.json';
import atmat_signal_pro_400_v1 from './atmat_signal_pro_400_v1.def.json';
import atmat_signal_pro_400_v2 from './atmat_signal_pro_400_v2.def.json';
import atmat_signal_pro_500_v1 from './atmat_signal_pro_500_v1.def.json';
import atmat_signal_pro_500_v2 from './atmat_signal_pro_500_v2.def.json';
import atmat_signal_pro_base from './atmat_signal_pro_base.def.json';
import atmat_signal_xl from './atmat_signal_xl.def.json';
import atmat_signal_xxl from './atmat_signal_xxl.def.json';
import atmat_signal_xxxl from './atmat_signal_xxxl.def.json';
import beamup_l from './beamup_l.def.json';
import beamup_s from './beamup_s.def.json';
import bfb from './bfb.def.json';
import bibo2_dual from './bibo2_dual.def.json';
import biqu_b1 from './biqu_b1.def.json';
import biqu_b1_abl from './biqu_b1_abl.def.json';
import biqu_base from './biqu_base.def.json';
import blv_mgn_cube_300 from './blv_mgn_cube_300.def.json';
import blv_mgn_cube_350 from './blv_mgn_cube_350.def.json';
import blv_mgn_cube_base from './blv_mgn_cube_base.def.json';
import bq_hephestos from './bq_hephestos.def.json';
import bq_hephestos_2 from './bq_hephestos_2.def.json';
import bq_hephestos_xl from './bq_hephestos_xl.def.json';
import bq_witbox from './bq_witbox.def.json';
import bq_witbox_2 from './bq_witbox_2.def.json';
import builder_premium_large from './builder_premium_large.def.json';
import builder_premium_medium from './builder_premium_medium.def.json';
import builder_premium_small from './builder_premium_small.def.json';
import cartesio from './cartesio.def.json';
import cocoon_create from './cocoon_create.def.json';
import cocoon_create_modelmaker from './cocoon_create_modelmaker.def.json';
import cocoon_create_touch from './cocoon_create_touch.def.json';
import creality_base from './creality_base.def.json';
import creality_cr_x from './creality_cr-x.def.json';
import creality_cr10 from './creality_cr10.def.json';
import creality_cr10max from './creality_cr10max.def.json';
import creality_cr10mini from './creality_cr10mini.def.json';
import creality_cr10s from './creality_cr10s.def.json';
import creality_cr10s4 from './creality_cr10s4.def.json';
import creality_cr10s5 from './creality_cr10s5.def.json';
import creality_cr10spro from './creality_cr10spro.def.json';
import creality_cr20 from './creality_cr20.def.json';
import creality_cr20pro from './creality_cr20pro.def.json';
import creality_cr6se from './creality_cr6se.def.json';
import creality_ender2 from './creality_ender2.def.json';
import creality_ender3 from './creality_ender3.def.json';
import creality_ender3pro from './creality_ender3pro.def.json';
import creality_ender4 from './creality_ender4.def.json';
import creality_ender5 from './creality_ender5.def.json';
import creality_ender5plus from './creality_ender5plus.def.json';
import creatable_d3 from './creatable_d3.def.json';
import cubicon_3dp_110f from './cubicon_3dp_110f.def.json';
import cubicon_3dp_210f from './cubicon_3dp_210f.def.json';
import cubicon_3dp_310f from './cubicon_3dp_310f.def.json';
import cubicon_common from './cubicon_common.def.json';
import cubicon_dual_pro_a30 from './cubicon_dual_pro_a30.def.json';
import cubicon_style_neo_a22 from './cubicon_style_neo_a22.def.json';
import cubicon_style_plus_a15 from './cubicon_style_plus_a15.def.json';
import custom from './custom.def.json';
import dagoma_delta from './dagoma_delta.def.json';
import dagoma_disco from './dagoma_disco.def.json';
import dagoma_discoeasy200 from './dagoma_discoeasy200.def.json';
import dagoma_discoeasy200_bicolor from './dagoma_discoeasy200_bicolor.def.json';
import dagoma_discoultimate from './dagoma_discoultimate.def.json';
import dagoma_discoultimate_bicolor from './dagoma_discoultimate_bicolor.def.json';
import dagoma_magis from './dagoma_magis.def.json';
import dagoma_neva from './dagoma_neva.def.json';
import deltabot from './deltabot.def.json';
import deltacomb_base from './deltacomb_base.def.json';
import deltacomb_dc20 from './deltacomb_dc20.def.json';
import deltacomb_dc20dual from './deltacomb_dc20dual.def.json';
import deltacomb_dc20flux from './deltacomb_dc20flux.def.json';
import deltacomb_dc21 from './deltacomb_dc21.def.json';
import deltacomb_dc21dual from './deltacomb_dc21dual.def.json';
import deltacomb_dc21flux from './deltacomb_dc21flux.def.json';
import deltacomb_dc30 from './deltacomb_dc30.def.json';
import deltacomb_dc30dual from './deltacomb_dc30dual.def.json';
import deltacomb_dc30flux from './deltacomb_dc30flux.def.json';
import delta_go from './delta_go.def.json';
import diy220 from './diy220.def.json';
import dxu from './dxu.def.json';
import dxu_dual from './dxu_dual.def.json';
import easyarts_ares from './easyarts_ares.def.json';
import erzay3d from './erzay3d.def.json';
import fabtotum from './fabtotum.def.json';
import fabxpro from './fabxpro.def.json';
import fdmextruder from './fdmextruder.def.json';
import fdmprinter from './fdmprinter.def.json';
import felixpro2dual from './felixpro2dual.def.json';
import felixtec4dual from './felixtec4dual.def.json';
import flsun_qq from './flsun_qq.def.json';
import flsun_qq_s from './flsun_qq_s.def.json';
import flyingbear_base from './flyingbear_base.def.json';
import flyingbear_ghost_4s from './flyingbear_ghost_4s.def.json';
import flyingbear_ghost_5 from './flyingbear_ghost_5.def.json';
import folgertech_FT_5 from './folgertech_FT-5.def.json';
import fusedform_300 from './fusedform_300.def.json';
import fusedform_600 from './fusedform_600.def.json';
import fusedform_600plus from './fusedform_600plus.def.json';
import fusedform_base from './fusedform_base.def.json';
import fusedform_mini from './fusedform_mini.def.json';
import fusedform_std from './fusedform_std.def.json';
import geeetech_A10 from './geeetech_A10.def.json';
import geeetech_A10M from './geeetech_A10M.def.json';
import geeetech_A10T from './geeetech_A10T.def.json';
import geeetech_A20 from './geeetech_A20.def.json';
import geeetech_A20M from './geeetech_A20M.def.json';
import geeetech_A20T from './geeetech_A20T.def.json';
import geeetech_a30 from './geeetech_a30.def.json';
import gmax15plus from './gmax15plus.def.json';
import gmax15plus_dual from './gmax15plus_dual.def.json';
import grr_neo from './grr_neo.def.json';
import hellbot_adonis from './hellbot_adonis.def.json';
import hellbot_magna_dual from './hellbot_magna_dual.def.json';
import hellbot_magna_I from './hellbot_magna_I.def.json';
import helloBEEprusa from './helloBEEprusa.def.json';
import hms434 from './hms434.def.json';
import I3MetalMotion from './I3MetalMotion.def.json';
import imade3d_jellybox from './imade3d_jellybox.def.json';
import imade3d_jellybox_2 from './imade3d_jellybox_2.def.json';
import imade3d_jellybox_root from './imade3d_jellybox_root.def.json';
import innovo_inventor from './innovo_inventor.def.json';
import jgaurora_a1 from './jgaurora_a1.def.json';
import jgaurora_a3s from './jgaurora_a3s.def.json';
import jgaurora_a5 from './jgaurora_a5.def.json';
import jgaurora_jgmaker_magic from './jgaurora_jgmaker_magic.def.json';
import jgaurora_z_603s from './jgaurora_z_603s.def.json';
import julia from './julia.def.json';
import kemiq_q2_beta from './kemiq_q2_beta.def.json';
import kemiq_q2_gama from './kemiq_q2_gama.def.json';
import key3d_tyro from './key3d_tyro.def.json';
import kossel_mini from './kossel_mini.def.json';
import kossel_pro from './kossel_pro.def.json';
import kupido from './kupido.def.json';
import leapfrog_bolt_pro from './leapfrog_bolt_pro.def.json';
import leapfrog_creatr_hs from './leapfrog_creatr_hs.def.json';
import leapfrog_creatr_hs_xl from './leapfrog_creatr_hs_xl.def.json';
import lotmaxx_sc10 from './lotmaxx_sc10.def.json';
import lotmaxx_sc20 from './lotmaxx_sc20.def.json';
import lotmaxx_sc60 from './lotmaxx_sc60.def.json';
import makeblock_mcreate from './makeblock_mcreate.def.json';
import makeit_pro_l from './makeit_pro_l.def.json';
import makeit_pro_m from './makeit_pro_m.def.json';
import makeit_pro_mx from './makeit_pro_mx.def.json';
import makerbotreplicator from './makerbotreplicator.def.json';
import makeR_pegasus from './makeR_pegasus.def.json';
import makeR_prusa_tairona_i3 from './makeR_prusa_tairona_i3.def.json';
import maker_starter from './maker_starter.def.json';
import malyan_m180 from './malyan_m180.def.json';
import malyan_m200 from './malyan_m200.def.json';
import mankati_fullscale_xt_plus from './mankati_fullscale_xt_plus.def.json';
import Mark2_for_Ultimaker2 from './Mark2_for_Ultimaker2.def.json';
import mbot3d_grid2plus from './mbot3d_grid2plus.def.json';
import mbot3d_grid2plus_dual from './mbot3d_grid2plus_dual.def.json';
import mbot3d_grid4 from './mbot3d_grid4.def.json';
import mbot3d_grid4_dual from './mbot3d_grid4_dual.def.json';
import mendel90 from './mendel90.def.json';
import monoprice_select_mini_v1 from './monoprice_select_mini_v1.def.json';
import monoprice_select_mini_v2 from './monoprice_select_mini_v2.def.json';
import monoprice_ultimate from './monoprice_ultimate.def.json';
import mp_mini_delta from './mp_mini_delta.def.json';
import nwa3d_a31 from './nwa3d_a31.def.json';
import nwa3d_a5 from './nwa3d_a5.def.json';
import ord from './ord.def.json';
import peopoly_moai from './peopoly_moai.def.json';
import predator from './predator.def.json';
import printrbot_play from './printrbot_play.def.json';
import printrbot_play_heated from './printrbot_play_heated.def.json';
import printrbot_simple from './printrbot_simple.def.json';
import printrbot_simple_extended from './printrbot_simple_extended.def.json';
import printrbot_simple_makers_kit from './printrbot_simple_makers_kit.def.json';
import prusa_i3 from './prusa_i3.def.json';
import prusa_i3_mk2 from './prusa_i3_mk2.def.json';
import prusa_i3_mk3 from './prusa_i3_mk3.def.json';
import prusa_i3_xl from './prusa_i3_xl.def.json';
import punchtec_connect_xl from './punchtec_connect_xl.def.json';
import raise3D_N2_dual from './raise3D_N2_dual.def.json';
import raise3D_N2_plus_dual from './raise3D_N2_plus_dual.def.json';
import raise3D_N2_plus_single from './raise3D_N2_plus_single.def.json';
import raise3D_N2_single from './raise3D_N2_single.def.json';
import renkforce_rf100 from './renkforce_rf100.def.json';
import renkforce_rf100_v2 from './renkforce_rf100_v2.def.json';
import renkforce_rf100_xl from './renkforce_rf100_xl.def.json';
import rigid3d from './rigid3d.def.json';
import rigid3d_3rdgen from './rigid3d_3rdgen.def.json';
import rigid3d_base from './rigid3d_base.def.json';
import rigid3d_hobby from './rigid3d_hobby.def.json';
import rigid3d_mucit from './rigid3d_mucit.def.json';
import rigid3d_zero from './rigid3d_zero.def.json';
import rigid3d_zero2 from './rigid3d_zero2.def.json';
import rigidbot from './rigidbot.def.json';
import rigidbot_big from './rigidbot_big.def.json';
import robo_3d_r1 from './robo_3d_r1.def.json';
import seemecnc_artemis from './seemecnc_artemis.def.json';
import seemecnc_v32 from './seemecnc_v32.def.json';
import skriware_2 from './skriware_2.def.json';
import smoothie from './smoothie.def.json';
import stereotech_start from './stereotech_start.def.json';
import stereotech_ste320 from './stereotech_ste320.def.json';
import strateo3d from './strateo3d.def.json';
import structur3d_discov3ry1_complete_um2plus from './structur3d_discov3ry1_complete_um2plus.def.json';
import SV01 from './SV01.def.json';
import SV02 from './SV02.def.json';
import tam from './tam.def.json';
import tevo_blackwidow from './tevo_blackwidow.def.json';
import tevo_tarantula from './tevo_tarantula.def.json';
import tevo_tarantula_pro from './tevo_tarantula_pro.def.json';
import tevo_tornado from './tevo_tornado.def.json';
import tinyboy_e10 from './tinyboy_e10.def.json';
import tinyboy_e16 from './tinyboy_e16.def.json';
import tinyboy_ra20 from './tinyboy_ra20.def.json';
import tizyx_evy from './tizyx_evy.def.json';
import tizyx_evy_dual from './tizyx_evy_dual.def.json';
import tizyx_k25 from './tizyx_k25.def.json';
import tronxy_d01 from './tronxy_d01.def.json';
import tronxy_x from './tronxy_x.def.json';
import tronxy_x5sa from './tronxy_x5sa.def.json';
import tronxy_x5sa_400 from './tronxy_x5sa_400.def.json';
import tronxy_x5sa_500 from './tronxy_x5sa_500.def.json';
import tronxy_xy2 from './tronxy_xy2.def.json';
import tronxy_xy2pro from './tronxy_xy2pro.def.json';
import tronxy_xy3 from './tronxy_xy3.def.json';
import ubuild_3d_mr_bot_280 from './ubuild-3d_mr_bot_280.def.json';
import ultimaker from './ultimaker.def.json';
import ultimaker2 from './ultimaker2.def.json';
import ultimaker2_extended from './ultimaker2_extended.def.json';
import ultimaker2_extended_olsson from './ultimaker2_extended_olsson.def.json';
import ultimaker2_extended_plus from './ultimaker2_extended_plus.def.json';
import ultimaker2_go from './ultimaker2_go.def.json';
import ultimaker2_olsson from './ultimaker2_olsson.def.json';
import ultimaker2_plus from './ultimaker2_plus.def.json';
import ultimaker3 from './ultimaker3.def.json';
import ultimaker3_extended from './ultimaker3_extended.def.json';
import ultimaker_original from './ultimaker_original.def.json';
import ultimaker_original_dual from './ultimaker_original_dual.def.json';
import ultimaker_original_plus from './ultimaker_original_plus.def.json';
import ultimaker_s3 from './ultimaker_s3.def.json';
import ultimaker_s5 from './ultimaker_s5.def.json';
import uniqbot_one from './uniqbot_one.def.json';
import uni_200 from './uni_200.def.json';
import uni_250 from './uni_250.def.json';
import uni_300 from './uni_300.def.json';
import uni_base from './uni_base.def.json';
import uni_mini from './uni_mini.def.json';
import uni_print_3d from './uni_print_3d.def.json';
import vertex_delta_k8800 from './vertex_delta_k8800.def.json';
import vertex_k8400 from './vertex_k8400.def.json';
import vertex_k8400_dual from './vertex_k8400_dual.def.json';
import vertex_nano_k8600 from './vertex_nano_k8600.def.json';
import voron2_250 from './voron2_250.def.json';
import voron2_300 from './voron2_300.def.json';
import voron2_350 from './voron2_350.def.json';
import voron2_base from './voron2_base.def.json';
import voron2_custom from './voron2_custom.def.json';
import wanhao_d4s from './wanhao_d4s.def.json';
import wanhao_d6 from './wanhao_d6.def.json';
import wanhao_d6_plus from './wanhao_d6_plus.def.json';
import wanhao_d9 from './wanhao_d9.def.json';
import wanhao_duplicator5S from './wanhao_duplicator5S.def.json';
import wanhao_duplicator5Smini from './wanhao_duplicator5Smini.def.json';
import wanhao_i3 from './wanhao_i3.def.json';
import wanhao_i3mini from './wanhao_i3mini.def.json';
import wanhao_i3plus from './wanhao_i3plus.def.json';
import winbo_dragonl4 from './winbo_dragonl4.def.json';
import winbo_mini2 from './winbo_mini2.def.json';
import winbo_superhelper105 from './winbo_superhelper105.def.json';
import winbo_superhelper155 from './winbo_superhelper155.def.json';
import z_bolt_classic from './z-bolt_classic.def.json';
import z_bolt_plus from './z-bolt_plus.def.json';
import zone3d_printer from './zone3d_printer.def.json';
import zyyx_agile from './zyyx_agile.def.json';

//Export
export default {
  _101Hero,
  _3dator,
  _3dtech_semi_professional,
  abax_pri3,
  abax_pri5,
  abax_titan,
  alfawise_u20,
  alfawise_u30,
  alya3dp,
  alyanx3dp,
  anet3d,
  anet3d_a2,
  anet3d_a2_plus,
  anet3d_a6,
  anet3d_a8,
  anet3d_a8_plus,
  anet3d_e10,
  anet3d_e12,
  anet3d_e16,
  anet3d_et4,
  anet3d_et4_pro,
  anet3d_et4_x,
  anet3d_et5,
  anet3d_et5_x,
  anycubic_4max,
  anycubic_chiron,
  anycubic_i3_mega,
  anycubic_kossel,
  anycubic_kossel_linear_plus,
  anycubic_kossel_pulley,
  anycubic_mega_zero,
  artillery_base,
  artillery_genius,
  artillery_sidewinder_x1,
  atmat_asterion,
  atmat_asterion_ht,
  atmat_galaxy_500,
  atmat_galaxy_600,
  atmat_signal_pro_300_v1,
  atmat_signal_pro_300_v2,
  atmat_signal_pro_400_v1,
  atmat_signal_pro_400_v2,
  atmat_signal_pro_500_v1,
  atmat_signal_pro_500_v2,
  atmat_signal_pro_base,
  atmat_signal_xl,
  atmat_signal_xxl,
  atmat_signal_xxxl,
  beamup_l,
  beamup_s,
  bfb,
  bibo2_dual,
  biqu_b1,
  biqu_b1_abl,
  biqu_base,
  blv_mgn_cube_300,
  blv_mgn_cube_350,
  blv_mgn_cube_base,
  bq_hephestos,
  bq_hephestos_2,
  bq_hephestos_xl,
  bq_witbox,
  bq_witbox_2,
  builder_premium_large,
  builder_premium_medium,
  builder_premium_small,
  cartesio,
  cocoon_create,
  cocoon_create_modelmaker,
  cocoon_create_touch,
  creality_base,
  creality_cr_x,
  creality_cr10,
  creality_cr10max,
  creality_cr10mini,
  creality_cr10s,
  creality_cr10s4,
  creality_cr10s5,
  creality_cr10spro,
  creality_cr20,
  creality_cr20pro,
  creality_cr6se,
  creality_ender2,
  creality_ender3,
  creality_ender3pro,
  creality_ender4,
  creality_ender5,
  creality_ender5plus,
  creatable_d3,
  cubicon_3dp_110f,
  cubicon_3dp_210f,
  cubicon_3dp_310f,
  cubicon_common,
  cubicon_dual_pro_a30,
  cubicon_style_neo_a22,
  cubicon_style_plus_a15,
  custom,
  dagoma_delta,
  dagoma_disco,
  dagoma_discoeasy200,
  dagoma_discoeasy200_bicolor,
  dagoma_discoultimate,
  dagoma_discoultimate_bicolor,
  dagoma_magis,
  dagoma_neva,
  deltabot,
  deltacomb_base,
  deltacomb_dc20,
  deltacomb_dc20dual,
  deltacomb_dc20flux,
  deltacomb_dc21,
  deltacomb_dc21dual,
  deltacomb_dc21flux,
  deltacomb_dc30,
  deltacomb_dc30dual,
  deltacomb_dc30flux,
  delta_go,
  diy220,
  dxu,
  dxu_dual,
  easyarts_ares,
  erzay3d,
  fabtotum,
  fabxpro,
  fdmextruder,
  fdmprinter,
  felixpro2dual,
  felixtec4dual,
  flsun_qq,
  flsun_qq_s,
  flyingbear_base,
  flyingbear_ghost_4s,
  flyingbear_ghost_5,
  folgertech_FT_5,
  fusedform_300,
  fusedform_600,
  fusedform_600plus,
  fusedform_base,
  fusedform_mini,
  fusedform_std,
  geeetech_A10,
  geeetech_A10M,
  geeetech_A10T,
  geeetech_A20,
  geeetech_A20M,
  geeetech_A20T,
  geeetech_a30,
  gmax15plus,
  gmax15plus_dual,
  grr_neo,
  hellbot_adonis,
  hellbot_magna_dual,
  hellbot_magna_I,
  helloBEEprusa,
  hms434,
  I3MetalMotion,
  imade3d_jellybox,
  imade3d_jellybox_2,
  imade3d_jellybox_root,
  innovo_inventor,
  jgaurora_a1,
  jgaurora_a3s,
  jgaurora_a5,
  jgaurora_jgmaker_magic,
  jgaurora_z_603s,
  julia,
  kemiq_q2_beta,
  kemiq_q2_gama,
  key3d_tyro,
  kossel_mini,
  kossel_pro,
  kupido,
  leapfrog_bolt_pro,
  leapfrog_creatr_hs,
  leapfrog_creatr_hs_xl,
  lotmaxx_sc10,
  lotmaxx_sc20,
  lotmaxx_sc60,
  makeblock_mcreate,
  makeit_pro_l,
  makeit_pro_m,
  makeit_pro_mx,
  makerbotreplicator,
  makeR_pegasus,
  makeR_prusa_tairona_i3,
  maker_starter,
  malyan_m180,
  malyan_m200,
  mankati_fullscale_xt_plus,
  Mark2_for_Ultimaker2,
  mbot3d_grid2plus,
  mbot3d_grid2plus_dual,
  mbot3d_grid4,
  mbot3d_grid4_dual,
  mendel90,
  monoprice_select_mini_v1,
  monoprice_select_mini_v2,
  monoprice_ultimate,
  mp_mini_delta,
  nwa3d_a31,
  nwa3d_a5,
  ord,
  peopoly_moai,
  predator,
  printrbot_play,
  printrbot_play_heated,
  printrbot_simple,
  printrbot_simple_extended,
  printrbot_simple_makers_kit,
  prusa_i3,
  prusa_i3_mk2,
  prusa_i3_mk3,
  prusa_i3_xl,
  punchtec_connect_xl,
  raise3D_N2_dual,
  raise3D_N2_plus_dual,
  raise3D_N2_plus_single,
  raise3D_N2_single,
  renkforce_rf100,
  renkforce_rf100_v2,
  renkforce_rf100_xl,
  rigid3d,
  rigid3d_3rdgen,
  rigid3d_base,
  rigid3d_hobby,
  rigid3d_mucit,
  rigid3d_zero,
  rigid3d_zero2,
  rigidbot,
  rigidbot_big,
  robo_3d_r1,
  seemecnc_artemis,
  seemecnc_v32,
  skriware_2,
  smoothie,
  stereotech_start,
  stereotech_ste320,
  strateo3d,
  structur3d_discov3ry1_complete_um2plus,
  SV01,
  SV02,
  tam,
  tevo_blackwidow,
  tevo_tarantula,
  tevo_tarantula_pro,
  tevo_tornado,
  tinyboy_e10,
  tinyboy_e16,
  tinyboy_ra20,
  tizyx_evy,
  tizyx_evy_dual,
  tizyx_k25,
  tronxy_d01,
  tronxy_x,
  tronxy_x5sa,
  tronxy_x5sa_400,
  tronxy_x5sa_500,
  tronxy_xy2,
  tronxy_xy2pro,
  tronxy_xy3,
  ubuild_3d_mr_bot_280,
  ultimaker,
  ultimaker2,
  ultimaker2_extended,
  ultimaker2_extended_olsson,
  ultimaker2_extended_plus,
  ultimaker2_go,
  ultimaker2_olsson,
  ultimaker2_plus,
  ultimaker3,
  ultimaker3_extended,
  ultimaker_original,
  ultimaker_original_dual,
  ultimaker_original_plus,
  ultimaker_s3,
  ultimaker_s5,
  uniqbot_one,
  uni_200,
  uni_250,
  uni_300,
  uni_base,
  uni_mini,
  uni_print_3d,
  vertex_delta_k8800,
  vertex_k8400,
  vertex_k8400_dual,
  vertex_nano_k8600,
  voron2_250,
  voron2_300,
  voron2_350,
  voron2_base,
  voron2_custom,
  wanhao_d4s,
  wanhao_d6,
  wanhao_d6_plus,
  wanhao_d9,
  wanhao_duplicator5S,
  wanhao_duplicator5Smini,
  wanhao_i3,
  wanhao_i3mini,
  wanhao_i3plus,
  winbo_dragonl4,
  winbo_mini2,
  winbo_superhelper105,
  winbo_superhelper155,
  z_bolt_classic,
  z_bolt_plus,
  zone3d_printer,
  zyyx_agile,
};
