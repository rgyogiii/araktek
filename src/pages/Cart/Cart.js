import React, {useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import laptop from '../Checkout/laptop1.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from "react-router-dom";

// Icons
export const TruckIcon=()=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="57" height="50" viewBox="0 0 57 50">
            <g fill="#282827">
                <path d="M56.4122706,29.4014908 C56.4061112,29.36309 56.3966338,29.3252956 56.383945,29.2885321 C56.3822248,29.2833716 56.3802752,29.278211 56.3783257,29.2730505 C56.3646175,29.236036 56.3477351,29.200276 56.327867,29.1661697 L56.3191514,29.1518349 C56.2976841,29.1170765 56.2731604,29.0843015 56.2458716,29.0538991 C56.2440367,29.0518349 56.2428899,29.0493119 56.2409404,29.0472477 L48.1783257,20.262844 C47.4545284,19.4759706 46.4346172,19.0276803 45.3654817,19.0264908 L36.043578,19.0264908 L36.043578,14.500344 C36.0411758,12.3923822 34.3327329,10.6842471 32.2247706,10.6822248 L28.8138761,10.6822248 L28.8138761,5.71662844 C28.8138759,5.45410163 28.66449,5.21445252 28.4287844,5.09885321 L18.324656,0.140711009 C18.133736,0.0470119189 17.910186,0.0470119189 17.7192661,0.140711009 L7.6146789,5.08394495 C7.37863883,5.1994367 7.22898992,5.43928436 7.22901376,5.70206422 L7.22901376,10.6822248 L3.81811927,10.6822248 C1.71042576,10.6846263 0.00240150014,12.3926505 0,14.500344 L0,40.6341743 C0.00240162204,42.7418492 1.71044431,44.4498406 3.81811927,44.4521789 L7.08176606,44.4521789 C7.43163349,47.5713725 10.0692736,49.9301027 13.2080275,49.9301027 C16.3467814,49.9301027 18.9844216,47.5713725 19.334289,44.4521789 L38.5354358,44.4521789 C38.8850612,47.5715362 41.5227503,49.9301027 44.6616399,49.9301027 C47.8005295,49.9301027 50.4382186,47.5715362 50.787844,44.4521789 L52.6038991,44.4521789 C54.711574,44.4498406 56.4196167,42.7418492 56.4220183,40.6341743 L56.4220183,29.5125 C56.4220183,29.4810667 56.419428,29.4496854 56.4149083,29.418578 C56.4141055,29.412844 56.4131881,29.4072248 56.4122706,29.4014908 Z M45.3654817,20.4022936 C46.0493494,20.4031527 46.7016703,20.6900791 47.1644495,21.193578 L54.1684633,28.825 L36.043578,28.825 L36.043578,20.4022936 L45.3654817,20.4022936 Z M8.60561927,6.13142202 L18.0207569,1.52465596 L27.4372706,6.14495413 L27.4372706,15.1605505 C27.4372706,17.1690367 26.0325688,19.8227064 24.3699541,20.9552752 L18.0211009,25.2807339 L11.6724771,20.9552752 C10.7616972,20.3347477 9.89919725,19.2465596 9.30619266,17.9706422 C8.85412844,16.9978211 8.60516055,15.9998853 8.60516055,15.1610092 L8.60561927,6.13142202 Z M1.37614679,40.6341743 L1.37614679,14.500344 C1.37772662,13.1523348 2.47011004,12.0599514 3.81811927,12.0583716 L7.22947248,12.0583716 L7.22947248,15.1605505 C7.22947248,16.2108945 7.51616972,17.3831422 8.05860092,18.5505734 C8.75321101,20.0454128 9.78818807,21.3364679 10.8981651,22.0926606 L17.634289,26.6819954 C17.8679815,26.8411572 18.1752525,26.8411572 18.408945,26.6819954 L25.1451835,22.0926606 C27.2022936,20.6912844 28.8138761,17.646445 28.8138761,15.1605505 L28.8138761,12.0583716 L32.2247706,12.0583716 C33.5730486,12.0595723 34.6658507,13.1520665 34.6674312,14.500344 L34.6674312,43.0760321 L19.3348624,43.0760321 C18.984995,39.9568385 16.3473548,37.5985114 13.2086009,37.5985114 C10.069847,37.5985114 7.43220688,39.9568385 7.08233945,43.0760321 L3.81811927,43.0760321 C2.47012859,43.0745155 1.37772675,41.9821649 1.37614679,40.6341743 Z M13.2080275,48.553555 C10.5628876,48.553555 8.41857798,46.4092454 8.41857798,43.7641055 C8.41857798,41.1189656 10.5628876,38.974656 13.2080275,38.974656 C15.8531675,38.974656 17.9974771,41.1189656 17.9974771,43.7641055 C17.9944436,46.4079879 15.85191,48.5505216 13.2080275,48.553555 Z M44.6615826,48.553555 C42.0164426,48.553555 39.872133,46.4092454 39.872133,43.7641055 C39.872133,41.1189656 42.0164426,38.974656 44.6615826,38.974656 C47.3067225,38.974656 49.4510321,41.1189656 49.4510321,43.7641055 C49.4480617,46.4080141 47.3054912,48.5505847 44.6615826,48.553555 L44.6615826,48.553555 Z M55.0458716,40.6341743 C55.0442916,41.9821649 53.9518898,43.0745155 52.6038991,43.0760321 L50.787844,43.0760321 C50.4382186,39.9566748 47.8005295,37.5981083 44.6616399,37.5981083 C41.5227503,37.5981083 38.8850612,39.9566748 38.5354358,43.0760321 L36.043578,43.0760321 L36.043578,30.2005734 L55.0458716,30.2005734 L55.0458716,40.6341743 Z"></path>
                <path d="M16.3178899,16.6098624 C16.5851466,16.8705468 17.0115277,16.8705468 17.2787844,16.6098624 L22.7775229,11.2466743 C22.9550677,11.075365 23.0273053,10.8221108 22.9668519,10.5829155 C22.9063984,10.3437202 22.7225079,10.1551989 22.4848897,10.0888166 C22.2472716,10.0224342 21.9922994,10.0883523 21.8166284,10.2615826 L16.7982798,15.1561927 L14.2267202,12.6479358 C14.0510492,12.4747055 13.796077,12.4087874 13.5584589,12.4751698 C13.3208408,12.5415521 13.1369502,12.7300734 13.0764968,12.9692687 C13.0160433,13.208464 13.088281,13.4617183 13.2658257,13.6330275 L16.3178899,16.6098624 Z"></path>
            </g>
        </svg>
    );
};
export const GiftIcon=()=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="50" viewBox="0 0 38 50" wz_dt_ref="true">
            <path fill="#282827" d="M24.9866071,12.1875 C25.8330357,11.4705357 26.6410714,10.5580357 27.3321429,9.47678571 C28.3508929,7.88303571 28.9803571,6.15892857 29.1035714,4.62321429 C29.2410714,2.9 28.7366071,1.58125 27.6803571,0.905357143 C27.2205357,0.6125 26.6883929,0.463392857 26.1,0.463392857 C24.1142857,0.463392857 21.7383929,2.17321429 20.0473214,4.82142857 C19.4892857,5.69285714 19.0544643,6.60178571 18.75,7.49910714 C18.4446429,6.60178571 18.0089286,5.69285714 17.4517857,4.82142857 C15.7589286,2.17321429 13.3839286,0.463392857 11.3991071,0.463392857 C10.8107143,0.463392857 10.2785714,0.6125 9.81875,0.905357143 C8.76160714,1.58125 8.25714286,2.9 8.39553571,4.62321429 C8.51964286,6.15892857 9.14910714,7.88214286 10.1669643,9.47678571 C10.8580357,10.5580357 11.6660714,11.4705357 12.5116071,12.1875 L0.0741071429,12.1875 L0.0741071429,49.5357143 L37.4223214,49.5357143 L37.4223214,12.1875 L24.9866071,12.1875 Z M19.9178571,9.80625 C20.0205357,8.53392857 20.5598214,7.07767857 21.4357143,5.70714286 C23.0160714,3.23571429 24.9616071,2.10982143 26.1017857,2.10982143 C26.3705357,2.10982143 26.6044643,2.17142857 26.79375,2.29375 C27.3044643,2.61964286 27.5491071,3.42053571 27.4625,4.49107143 C27.3607143,5.76428571 26.8214286,7.22053571 25.9446429,8.59107143 C24.3642857,11.0625 22.41875,12.1875 21.2794643,12.1875 C21.0089286,12.1875 20.7767857,12.1267857 20.5866071,12.0044643 C20.075,11.6776786 19.8321429,10.8776786 19.9178571,9.80625 Z M11.5553571,8.59107143 C10.6794643,7.22053571 10.1401786,5.76428571 10.0375,4.49107143 C9.95178571,3.42053571 10.1955357,2.61964286 10.70625,2.29375 C10.8973214,2.17142857 11.1303571,2.10982143 11.3991071,2.10982143 C12.5383929,2.10982143 14.4848214,3.23660714 16.0651786,5.70714286 C16.9410714,7.07767857 17.4803571,8.53392857 17.5821429,9.80625 C17.66875,10.8767857 17.425,11.6776786 16.9142857,12.0044643 C16.7232143,12.1267857 16.4901786,12.1875 16.2205357,12.1875 C15.0821429,12.1875 13.1357143,11.0625 11.5553571,8.59107143 Z M1.72321429,13.8348214 L17.9267857,13.8348214 L17.9267857,47.8892857 L1.72321429,47.8892857 L1.72321429,13.8348214 Z M35.7776786,47.8892857 L19.5741071,47.8892857 L19.5741071,13.8348214 L35.7776786,13.8348214 L35.7776786,47.8892857 Z"></path>
        </svg>
    );
};

export const ReturnIcon=()=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="40" viewBox="0 0 37 40">
            <g fill="#282827">
                <path d="M15.0428894,21.6433409 C13.8374718,20.4288939 12.6275395,19.214447 11.4221219,17.9954853 C9.50790068,16.0722348 7.59819413,14.1444695 5.68397291,12.221219 C5.24153499,11.7742664 4.79909707,11.3318284 4.35665914,10.8848758 C4.35665914,11.3092551 4.35665914,11.738149 4.35665914,12.1625282 C5.56659142,10.9616253 6.7765237,9.76072235 7.98194131,8.55981941 C9.89616253,6.65914221 11.8103837,4.75846501 13.7200903,2.85778781 C14.1580135,2.41986456 14.6004515,1.98194131 15.0383747,1.54853273 C15.3724605,1.21444695 15.3950339,0.600451467 15.0383747,0.270880361 C14.6772009,-0.0586907449 14.1173815,-0.085778781 13.7607223,0.270880361 C12.5507901,1.4717833 11.3408578,2.67268623 10.1354402,3.87358916 C8.22121896,5.77426637 6.30699774,7.67494357 4.3972912,9.57562077 C3.95936795,10.013544 3.51693002,10.4514673 3.07900677,10.8848758 C2.73137698,11.227991 2.73589165,11.8148984 3.07900677,12.1625282 C4.28442438,13.3769752 5.49435666,14.5914221 6.69977427,15.8103837 C8.61399549,17.7336343 10.523702,19.6613995 12.4379233,21.5846501 C12.8803612,22.0316027 13.3227991,22.4740406 13.765237,22.9209932 C14.0993228,23.255079 14.7133183,23.2776524 15.0428894,22.9209932 C15.3724605,22.5598194 15.3995485,22 15.0428894,21.6433409 L15.0428894,21.6433409 Z"></path>
                <path d="M3.751693,12.4288939 C5.24604966,12.4288939 6.74492099,12.4334086 8.23927765,12.4334086 C11.0699774,12.4379233 13.8961625,12.4424379 16.7268623,12.4424379 C18.4018059,12.4424379 20.0722348,12.4469526 21.7471783,12.4469526 C21.9503386,12.4469526 22.1489842,12.4514673 22.3521445,12.4604966 C22.6049661,12.469526 22.8532731,12.4875847 23.1060948,12.510158 C23.2325056,12.523702 23.3544018,12.537246 23.476298,12.5507901 C23.6930023,12.5778781 23.2641084,12.5191874 23.4808126,12.5507901 C23.5620767,12.5643341 23.6433409,12.5733634 23.724605,12.5869074 C24.6907449,12.744921 25.6388262,13.0022573 26.5462754,13.3634312 C26.6004515,13.3860045 26.6591422,13.4085779 26.7133183,13.4311512 C26.9119639,13.5079007 26.523702,13.3498871 26.717833,13.4356659 C26.8261851,13.4853273 26.9390519,13.530474 27.0474041,13.5846501 C27.282167,13.6930023 27.51693,13.8103837 27.7471783,13.9322799 C28.1715576,14.1580135 28.5778781,14.4018059 28.9751693,14.6726862 C29.1738149,14.8081264 29.3679458,14.9435666 29.5575621,15.0880361 C29.6117381,15.1286682 29.765237,15.1963883 29.5620767,15.0925508 C29.5936795,15.1106095 29.6252822,15.1422122 29.6568849,15.1647856 C29.765237,15.2505643 29.8735892,15.3408578 29.9774266,15.4266366 C30.3566591,15.7471783 30.717833,16.0857788 31.0609481,16.4424379 C31.2099323,16.6004515 31.3589165,16.7629797 31.503386,16.9255079 C31.6659142,17.1106095 31.8781038,17.3092551 31.9954853,17.5214447 C31.8826185,17.3182844 31.9593679,17.476298 32,17.5259594 C32.0361174,17.5756208 32.0722348,17.6207675 32.1083521,17.6704289 C32.1805869,17.765237 32.248307,17.8645598 32.3160271,17.9638826 C32.4514673,18.1580135 32.5823928,18.3611738 32.7088036,18.5643341 C32.9706546,18.9887133 33.2099323,19.4266366 33.4266366,19.8781038 C33.4717833,19.9683973 33.5124153,20.0586907 33.5530474,20.1489842 C33.5756208,20.2031603 33.6027088,20.2573363 33.6252822,20.3160271 C33.6343115,20.3340858 33.6433409,20.3521445 33.6478555,20.3702032 C33.6884876,20.4604966 33.6794582,20.4424379 33.6252822,20.3205418 C33.6884876,20.4018059 33.7200903,20.5598194 33.7607223,20.6591422 C33.8103837,20.7900677 33.8600451,20.9255079 33.9051919,21.0564334 C34.0677201,21.51693 34.2031603,21.986456 34.3115124,22.4604966 C34.3656885,22.6997743 34.4153499,22.9435666 34.4604966,23.1828442 C34.48307,23.3047404 34.5011287,23.4266366 34.5191874,23.5485327 C34.5327314,23.6343115 34.6004515,23.7562077 34.5191874,23.5530474 C34.5417607,23.6117381 34.537246,23.7065463 34.5462754,23.7697517 C34.6591422,24.7629797 34.6636569,25.7697517 34.5553047,26.7629797 C34.5507901,26.8261851 34.5417607,26.8848758 34.5327314,26.9480813 C34.523702,27.020316 34.5462754,27.1918736 34.5327314,26.9571106 C34.537246,27.0744921 34.496614,27.2099323 34.4785553,27.3227991 C34.4379233,27.5665914 34.3927765,27.8103837 34.3386005,28.0496614 C34.2302483,28.5462754 34.0902935,29.03386 33.9232506,29.51693 C33.8510158,29.724605 33.7742664,29.9367946 33.6930023,30.1399549 C33.6749436,30.1896163 33.6568849,30.2663657 33.6252822,30.3069977 C33.6388262,30.2708804 33.6568849,30.2392777 33.6704289,30.2031603 C33.6568849,30.2392777 33.6388262,30.275395 33.6207675,30.3160271 C33.5665914,30.4469526 33.5079007,30.5733634 33.4446953,30.6997743 C33.241535,31.1331828 33.0112867,31.5575621 32.7629797,31.9638826 C32.6410835,32.1670429 32.510158,32.3702032 32.3747178,32.5688488 C32.2392777,32.7674944 32.0993228,33.0383747 31.9232506,33.1963883 C32.0902935,33.0474041 31.9638826,33.1467269 31.9187359,33.2009029 C31.8826185,33.2460497 31.8465011,33.2957111 31.8058691,33.3408578 C31.7426637,33.4176072 31.6794582,33.4943567 31.6162528,33.5711061 C31.4492099,33.7697517 31.2776524,33.9593679 31.0970655,34.1444695 C30.7674944,34.4875847 30.4243792,34.8171558 30.0632054,35.1286682 C29.972912,35.2054176 29.8826185,35.282167 29.7878104,35.3589165 C29.7426637,35.3950339 29.6930023,35.4356659 29.6478555,35.4717833 C29.5936795,35.51693 29.4943567,35.6433409 29.6433409,35.476298 C29.4853273,35.6568849 29.2099323,35.7968397 29.0158014,35.9277652 C28.6185102,36.1986456 28.2121896,36.4469526 27.7878104,36.6726862 C27.5756208,36.785553 27.3634312,36.8939052 27.1467269,36.9977427 C27.0474041,37.0428894 26.9480813,37.0925508 26.8442438,37.1331828 C26.7990971,37.1557562 26.7539503,37.1738149 26.7042889,37.1918736 C26.6139955,37.2325056 26.6320542,37.2234763 26.7539503,37.1693002 C26.717833,37.1828442 26.6817156,37.2009029 26.6410835,37.214447 C25.7155756,37.5891648 24.7494357,37.8600451 23.7697517,38.0225734 C23.6568849,38.0406321 23.51693,38.0857788 23.4040632,38.0767494 C23.6388262,38.0857788 23.4672686,38.0677201 23.3950339,38.0767494 C23.3318284,38.0857788 23.2731377,38.0902935 23.2099323,38.0993228 C22.9616253,38.1264108 22.7088036,38.1444695 22.4604966,38.1580135 C22.221219,38.1715576 21.9774266,38.1760722 21.738149,38.1760722 C21.5891648,38.1760722 21.4401806,38.1760722 21.2911964,38.1760722 C19.2911964,38.1760722 17.2866817,38.1760722 15.2866817,38.1760722 C12.4469526,38.1760722 9.6027088,38.1760722 6.76297968,38.1760722 C4.90293454,38.1760722 3.04288939,38.1760722 1.18735892,38.1760722 C1.09706546,38.1760722 1.00225734,38.1760722 0.911963883,38.1760722 C0.437923251,38.1760722 -0.0135440181,38.5914221 0.00902934537,39.0790068 C0.0316027088,39.5665914 0.406320542,39.9819413 0.911963883,39.9819413 C2.27539503,39.9819413 3.64334086,39.9819413 5.00677201,39.9819413 C7.82844244,39.9819413 10.6455982,39.9819413 13.4672686,39.9819413 C15.8239278,39.9819413 18.1805869,39.9819413 20.5417607,39.9819413 C20.9480813,39.9819413 21.3544018,39.9819413 21.7607223,39.9819413 C23.8465011,39.9774266 25.8826185,39.5214447 27.7832957,38.6772009 C31.5665914,37.0112867 34.4920993,33.6839729 35.7562077,29.7742664 C37.0564334,25.7607223 36.496614,21.241535 34.275395,17.6568849 C32.1083521,14.1534989 28.4604966,11.6027088 24.3882619,10.8848758 C22.5146727,10.5553047 20.5869074,10.6455982 18.6907449,10.6410835 C15.9051919,10.6365688 13.1151242,10.6320542 10.3295711,10.6320542 C8.24379233,10.6275395 6.16252822,10.6275395 4.07674944,10.6230248 C3.96839729,10.6230248 3.85553047,10.6230248 3.74717833,10.6230248 C3.2731377,10.6230248 2.82167043,11.0383747 2.84424379,11.5259594 C2.87133183,12.013544 3.24604966,12.4288939 3.751693,12.4288939 L3.751693,12.4288939 Z"></path>
            </g>
        </svg>
    );
};

export const AddIcon=()=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
    )
}

export const RemoveIcon=()=>{
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
        </svg>
    )
    
}



const Cart = () => {

    const [count, setCount]= useState(1);

    const handleIncrement=()=>{
        setCount(prevCount => prevCount + 1);

    }
    const handleDecrement=()=>{
        setCount(prevCount => prevCount - 1);
    }

  return (
    <>
        <Navbar/>
            <div className='container mx-auto mt-24'>
                <div className="flex justify-between mobile:flex-col tablet:flex-col">  
                    <div className="cart w-screen">
                        <div className="cart-head">
                            <span className='text-2xl'>My Bag</span>
                        </div>
                        <hr className='mt-7' />

                        {/* CART BODY TO BE MAPPED */}
                        <div className="mt-4 flex justify-between mobile:flex-col">
                            <div className="cart-items w-full mobile:w-96">
                                <div className='flex flex-between'>
                                    <div className="cart-img">
                                        <img src={laptop} width='100px' height='100px' alt="product"/>
                                    </div>
                                    <div className="cart-details ml-4">
                                        <span className='text-ellipsis-1 w-96 mobile:w-52'>Lenovo Legion 5 15ARH7H 82RD001APH 15.6" AMD Ryzen 7 6800H | NVIDIA GeForce RTX 3060 | 16GB DDR5-4800 | 512GB SSD [Storm Grey]</span>
                                        <div className="flex justify-evenly border-2 w-20 mt-5 border-gray-300">
                                                <button onClick={handleDecrement}><RemoveIcon/></button>
                                                <span className='text-s mx-2'>{count}</span>
                                                <button onClick={handleIncrement}><AddIcon/></button>
                                            </div>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="flex flex-col mobile:justify-end">
                                <span className='text-l font-semibold mobile:ml-3'>₱14,000.00</span>
                                <div className='text-end mt-5 mobile:hidden'><DeleteIcon className='cursor-pointer'/></div>
                            </div>
                        </div>
                        
                        {/* END */}
                        
                    </div>
                        
                    <div className="summary w-5/6 ml-10 mobile:mt-10 mobile:ml-7 tablet:w-96">
                        <div className='mb-7 mobile:flex mobile:justify-center'>
                            <span className="text-2xl font-semibold">Order Summary</span>
                        </div>
                        <div className="summary-body bg-gray-100 h-42 pb-3 px-2">
                                <div className="flex justify-between pt-5">
                                    <span>Subtotal</span>
                                    <span className='text-orange-700 font-medium'>P14,000.00</span>
                                </div>
                                <div className="flex justify-between mt-5 mb-7">
                                    <span>Shipping</span>
                                    <span>Calculated at next step</span>
                                </div>

                                <div className='flex justify-center mt-5'>
                                    <Link to='/checkout'><button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-80">Proceed to Checkout</button></Link>
                                </div>
                        </div>
                        <div className='flex justify-center mt-5'>
                            <span className='underline text-xs cursor-pointer'>View my wishlist</span>

                        </div>
                        

                    </div>
                </div>
            </div>



            <div className="flex justify-evenly mt-80">
                    <div className='flex flex-col'>       
                        <div className='flex justify-center'><TruckIcon/></div>
                        <span className='my-5 text-xs text-center'>Free Shipping</span>
                        <span className='text-xs w-32 text-center'>For the PH, UK, US, Canada & Australia (minimum spend)</span>
                    </div>
                    <div className='flex flex-col'>       
                    <div className='flex justify-center'><GiftIcon/></div>
                        <span className='my-5 text-xs text-center'>Summer Sale</span>
                        <span className='text-xs w-32 text-center'>Now up to 50% off</span>
                    </div>
                    <div className='flex flex-col'>       
                    <div className='flex justify-center'><ReturnIcon/></div>
                        <span className='my-5 text-xs text-center'>Free Returns</span>
                        <span className='text-xs w-32 text-center'>For the PH, UK, US, Canada & Australia. Rest of World. ₱1,100.00</span>
                    </div>
                </div>
        <Footer/>
    </>
  )
}

export default Cart