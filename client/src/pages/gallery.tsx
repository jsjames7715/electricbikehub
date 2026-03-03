import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Images, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "wouter";
import { galleryProjects, type GalleryProject } from "@/data/static-data";

import img33 from "@/assets/images/gallery/IMG_0033.jpg";
import img34 from "@/assets/images/gallery/IMG_0034.jpg";
import img35 from "@/assets/images/gallery/IMG_0035.jpg";
import img36 from "@/assets/images/gallery/IMG_0036.jpg";
import img37 from "@/assets/images/gallery/IMG_0037.jpg";
import img38 from "@/assets/images/gallery/IMG_0038.jpg";
import img39 from "@/assets/images/gallery/IMG_0039.jpg";
import img40 from "@/assets/images/gallery/IMG_0040.jpg";
import img41 from "@/assets/images/gallery/IMG_0041.jpg";
import img42 from "@/assets/images/gallery/IMG_0042.jpg";
import img43 from "@/assets/images/gallery/IMG_0043.jpg";
import img44 from "@/assets/images/gallery/IMG_0044.jpg";
import img45 from "@/assets/images/gallery/IMG_0045.jpg";
import img46 from "@/assets/images/gallery/IMG_0046.jpg";
import img399 from "@/assets/images/gallery/IMG_0399.jpg";
import img400 from "@/assets/images/gallery/IMG_0400.jpg";
import img401 from "@/assets/images/gallery/IMG_0401.jpg";
import img402 from "@/assets/images/gallery/IMG_0402.jpg";
import img403 from "@/assets/images/gallery/IMG_0403.jpg";
import img404 from "@/assets/images/gallery/IMG_0404.jpg";
import img405 from "@/assets/images/gallery/IMG_0405.jpg";
import img406 from "@/assets/images/gallery/IMG_0406.jpg";
import img407 from "@/assets/images/gallery/IMG_0407.jpg";
import img408 from "@/assets/images/gallery/IMG_0408.jpg";
import img409 from "@/assets/images/gallery/IMG_0409.jpg";
import img410 from "@/assets/images/gallery/IMG_0410.jpg";
import img502 from "@/assets/images/gallery/IMG_0502.jpg";
import img503 from "@/assets/images/gallery/IMG_0503.jpg";
import img504 from "@/assets/images/gallery/IMG_0504.jpg";
import img505 from "@/assets/images/gallery/IMG_0505.jpg";
import img506 from "@/assets/images/gallery/IMG_0506.jpg";
import img507 from "@/assets/images/gallery/IMG_0507.jpg";
import img508 from "@/assets/images/gallery/IMG_0508.jpg";
import img509 from "@/assets/images/gallery/IMG_0509.jpg";
import img510 from "@/assets/images/gallery/IMG_0510.jpg";
import img511 from "@/assets/images/gallery/IMG_0511.jpg";
import img513 from "@/assets/images/gallery/IMG_0513.jpg";
import img514 from "@/assets/images/gallery/IMG_0514.jpg";
import img515 from "@/assets/images/gallery/IMG_0515.jpg";
import img516 from "@/assets/images/gallery/IMG_0516.jpg";
import img517 from "@/assets/images/gallery/IMG_0517.jpg";
import img518 from "@/assets/images/gallery/IMG_0518.jpg";
import img519 from "@/assets/images/gallery/IMG_0519.jpg";
import img521 from "@/assets/images/gallery/IMG_0521.jpg";
import img522 from "@/assets/images/gallery/IMG_0522.jpg";
import img523 from "@/assets/images/gallery/IMG_0523.jpg";
import img524 from "@/assets/images/gallery/IMG_0524.jpg";
import img525 from "@/assets/images/gallery/IMG_0525.jpg";
import img526 from "@/assets/images/gallery/IMG_0526.jpg";
import img527 from "@/assets/images/gallery/IMG_0527.jpg";
import img528 from "@/assets/images/gallery/IMG_0528.jpg";
import img529 from "@/assets/images/gallery/IMG_0529.jpg";
import img530 from "@/assets/images/gallery/IMG_0530.jpg";
import img531 from "@/assets/images/gallery/IMG_0531.jpg";
import img532 from "@/assets/images/gallery/IMG_0532.jpg";
import img533 from "@/assets/images/gallery/IMG_0533.jpg";
import img534 from "@/assets/images/gallery/IMG_0534.jpg";
import img535 from "@/assets/images/gallery/IMG_0535.jpg";
import img536 from "@/assets/images/gallery/IMG_0536.jpg";
import img537 from "@/assets/images/gallery/IMG_0537.jpg";
import img538 from "@/assets/images/gallery/IMG_0538.jpg";
import img539 from "@/assets/images/gallery/IMG_0539.jpg";
import img540 from "@/assets/images/gallery/IMG_0540.jpg";
import img541 from "@/assets/images/gallery/IMG_0541.jpg";
import img542 from "@/assets/images/gallery/IMG_0542.jpg";
import img543 from "@/assets/images/gallery/IMG_0543.jpg";
import img544 from "@/assets/images/gallery/IMG_0544.jpg";
import img545 from "@/assets/images/gallery/IMG_0545.jpg";
import img546 from "@/assets/images/gallery/IMG_0546.jpg";
import img547 from "@/assets/images/gallery/IMG_0547.jpg";
import img548 from "@/assets/images/gallery/IMG_0548.jpg";
import img549 from "@/assets/images/gallery/IMG_0549.jpg";
import img550 from "@/assets/images/gallery/IMG_0550.jpg";
import img551 from "@/assets/images/gallery/IMG_0551.jpg";
import img552 from "@/assets/images/gallery/IMG_0552.jpg";
import img553 from "@/assets/images/gallery/IMG_0553.jpg";
import img554 from "@/assets/images/gallery/IMG_0554.jpg";
import img555 from "@/assets/images/gallery/IMG_0555.jpg";
import img556 from "@/assets/images/gallery/IMG_0556.jpg";
import img557 from "@/assets/images/gallery/IMG_0557.jpg";
import img558 from "@/assets/images/gallery/IMG_0558.jpg";
import img559 from "@/assets/images/gallery/IMG_0559.jpg";
import img560 from "@/assets/images/gallery/IMG_0560.jpg";
import img561 from "@/assets/images/gallery/IMG_0561.jpg";
import img562 from "@/assets/images/gallery/IMG_0562.jpg";
import img563 from "@/assets/images/gallery/IMG_0563.jpg";
import img564 from "@/assets/images/gallery/IMG_0564.jpg";
import img565 from "@/assets/images/gallery/IMG_0565.jpg";
import img566 from "@/assets/images/gallery/IMG_0566.jpg";
import img567 from "@/assets/images/gallery/IMG_0567.jpg";
import img568 from "@/assets/images/gallery/IMG_0568.jpg";
import img569 from "@/assets/images/gallery/IMG_0569.jpg";
import img570 from "@/assets/images/gallery/IMG_0570.jpg";
import img571 from "@/assets/images/gallery/IMG_0571.jpg";
import img572 from "@/assets/images/gallery/IMG_0572.jpg";
import img573 from "@/assets/images/gallery/IMG_0573.jpg";
import img574 from "@/assets/images/gallery/IMG_0574.jpg";
import img575 from "@/assets/images/gallery/IMG_0575.jpg";
import img576 from "@/assets/images/gallery/IMG_0576.jpg";
import img577 from "@/assets/images/gallery/IMG_0577.jpg";
import img578 from "@/assets/images/gallery/IMG_0578.jpg";
import img579 from "@/assets/images/gallery/IMG_0579.jpg";
import img580 from "@/assets/images/gallery/IMG_0580.jpg";
import img581 from "@/assets/images/gallery/IMG_0581.jpg";
import img582 from "@/assets/images/gallery/IMG_0582.jpg";
import img583 from "@/assets/images/gallery/IMG_0583.jpg";
import img584 from "@/assets/images/gallery/IMG_0584.jpg";
import img585 from "@/assets/images/gallery/IMG_0585.jpg";
import img586 from "@/assets/images/gallery/IMG_0586.jpg";
import img587 from "@/assets/images/gallery/IMG_0587.jpg";
import img588 from "@/assets/images/gallery/IMG_0588.jpg";
import img589 from "@/assets/images/gallery/IMG_0589.jpg";
import img590 from "@/assets/images/gallery/IMG_0590.jpg";
import img591 from "@/assets/images/gallery/IMG_0591.jpg";
import img592 from "@/assets/images/gallery/IMG_0592.jpg";
import img593 from "@/assets/images/gallery/IMG_0593.jpg";
import img594 from "@/assets/images/gallery/IMG_0594.jpg";
import img595 from "@/assets/images/gallery/IMG_0595.jpg";
import img596 from "@/assets/images/gallery/IMG_0596.jpg";
import img597 from "@/assets/images/gallery/IMG_0597.jpg";
import img598 from "@/assets/images/gallery/IMG_0598.jpg";
import img599 from "@/assets/images/gallery/IMG_0599.jpg";
import img600 from "@/assets/images/gallery/IMG_0600.jpg";
import img621 from "@/assets/images/gallery/IMG_0621.JPG";
import img622 from "@/assets/images/gallery/IMG_0622.JPG";
import img623 from "@/assets/images/gallery/IMG_0623.JPG";
import img624 from "@/assets/images/gallery/IMG_0624.JPG";
import img625 from "@/assets/images/gallery/IMG_0625.JPG";
import img626 from "@/assets/images/gallery/IMG_0626.JPG";
import img627 from "@/assets/images/gallery/IMG_0627.JPG";
import img628 from "@/assets/images/gallery/IMG_0628.JPG";
import img629 from "@/assets/images/gallery/IMG_0629.JPG";
import img630 from "@/assets/images/gallery/IMG_0630.JPG";
import img631 from "@/assets/images/gallery/IMG_0631.JPG";
import img632 from "@/assets/images/gallery/IMG_0632.JPG";
import img633 from "@/assets/images/gallery/IMG_0633.JPG";
import img634 from "@/assets/images/gallery/IMG_0634.JPG";
import img635 from "@/assets/images/gallery/IMG_0635.JPG";
import img636 from "@/assets/images/gallery/IMG_0636.JPG";
import img637 from "@/assets/images/gallery/IMG_0637.JPG";
import img638 from "@/assets/images/gallery/IMG_0638.JPG";
import img639 from "@/assets/images/gallery/IMG_0639.JPG";
import img640 from "@/assets/images/gallery/IMG_0640.JPG";
import img661 from "@/assets/images/gallery/IMG_0661.JPG";
import img662 from "@/assets/images/gallery/IMG_0662.JPG";
import img663 from "@/assets/images/gallery/IMG_0663.JPG";
import img664 from "@/assets/images/gallery/IMG_0664.JPG";
import img665 from "@/assets/images/gallery/IMG_0665.JPG";
import img666 from "@/assets/images/gallery/IMG_0666.JPG";
import img667 from "@/assets/images/gallery/IMG_0667.JPG";
import img668 from "@/assets/images/gallery/IMG_0668.JPG";
import img669 from "@/assets/images/gallery/IMG_0669.JPG";
import img670 from "@/assets/images/gallery/IMG_0670.JPG";
import img671 from "@/assets/images/gallery/IMG_0671.JPG";
import img672 from "@/assets/images/gallery/IMG_0672.JPG";
import img673 from "@/assets/images/gallery/IMG_0673.JPG";
import img674 from "@/assets/images/gallery/IMG_0674.JPG";
import img675 from "@/assets/images/gallery/IMG_0675.JPG";
import img676 from "@/assets/images/gallery/IMG_0676.JPG";
import img677 from "@/assets/images/gallery/IMG_0677.JPG";
import img678 from "@/assets/images/gallery/IMG_0678.JPG";
import img679 from "@/assets/images/gallery/IMG_0679.JPG";
import img680 from "@/assets/images/gallery/IMG_0680.JPG";
import img681 from "@/assets/images/gallery/IMG_0681.JPG";
import img682 from "@/assets/images/gallery/IMG_0682.JPG";
import img683 from "@/assets/images/gallery/IMG_0683.JPG";
import img684 from "@/assets/images/gallery/IMG_0684.JPG";
import img685 from "@/assets/images/gallery/IMG_0685.JPG";
import img686 from "@/assets/images/gallery/IMG_0686.JPG";
import img687 from "@/assets/images/gallery/IMG_0687.JPG";
import img688 from "@/assets/images/gallery/IMG_0688.JPG";
import img689 from "@/assets/images/gallery/IMG_0689.JPG";
import img690 from "@/assets/images/gallery/IMG_0690.JPG";
import img691 from "@/assets/images/gallery/IMG_0691.JPG";
import img692 from "@/assets/images/gallery/IMG_0692.JPG";
import img693 from "@/assets/images/gallery/IMG_0693.JPG";
import img694 from "@/assets/images/gallery/IMG_0694.JPG";
import img695 from "@/assets/images/gallery/IMG_0695.JPG";
import img696 from "@/assets/images/gallery/IMG_0696.JPG";
import img697 from "@/assets/images/gallery/IMG_0697.JPG";
import img698 from "@/assets/images/gallery/IMG_0698.JPG";
import img699 from "@/assets/images/gallery/IMG_0699.JPG";
import img700 from "@/assets/images/gallery/IMG_0700.JPG";
import img701 from "@/assets/images/gallery/IMG_0701.JPG";
import img702 from "@/assets/images/gallery/IMG_0702.JPG";
import img703 from "@/assets/images/gallery/IMG_0703.JPG";
import img704 from "@/assets/images/gallery/IMG_0704.JPG";
import img705 from "@/assets/images/gallery/IMG_0705.JPG";
import img706 from "@/assets/images/gallery/IMG_0706.JPG";
import img707 from "@/assets/images/gallery/IMG_0707.JPG";
import img708 from "@/assets/images/gallery/IMG_0708.JPG";
import img709 from "@/assets/images/gallery/IMG_0709.JPG";
import img710 from "@/assets/images/gallery/IMG_0710.JPG";
import img711 from "@/assets/images/gallery/IMG_0711.JPG";
import img712 from "@/assets/images/gallery/IMG_0712.JPG";
import img713 from "@/assets/images/gallery/IMG_0713.JPG";
import img714 from "@/assets/images/gallery/IMG_0714.JPG";
import img715 from "@/assets/images/gallery/IMG_0715.JPG";
import img716 from "@/assets/images/gallery/IMG_0716.JPG";
import img717 from "@/assets/images/gallery/IMG_0717.JPG";
import img718 from "@/assets/images/gallery/IMG_0718.JPG";
import img719 from "@/assets/images/gallery/IMG_0719.JPG";
import img720 from "@/assets/images/gallery/IMG_0720.JPG";
import img721 from "@/assets/images/gallery/IMG_0721.JPG";
import img722 from "@/assets/images/gallery/IMG_0722.JPG";
import img723 from "@/assets/images/gallery/IMG_0723.JPG";
import img724 from "@/assets/images/gallery/IMG_0724.JPG";
import img725 from "@/assets/images/gallery/IMG_0725.JPG";
import img726 from "@/assets/images/gallery/IMG_0726.JPG";
import img727 from "@/assets/images/gallery/IMG_0727.JPG";
import img728 from "@/assets/images/gallery/IMG_0728.JPG";
import img729 from "@/assets/images/gallery/IMG_0729.JPG";
import img730 from "@/assets/images/gallery/IMG_0730.JPG";
import img731 from "@/assets/images/gallery/IMG_0731.JPG";
import img732 from "@/assets/images/gallery/IMG_0732.JPG";
import img733 from "@/assets/images/gallery/IMG_0733.JPG";
import img734 from "@/assets/images/gallery/IMG_0734.JPG";
import img735 from "@/assets/images/gallery/IMG_0735.JPG";
import img736 from "@/assets/images/gallery/IMG_0736.JPG";
import img737 from "@/assets/images/gallery/IMG_0737.JPG";
import img738 from "@/assets/images/gallery/IMG_0738.JPG";
import img739 from "@/assets/images/gallery/IMG_0739.JPG";
import img740 from "@/assets/images/gallery/IMG_0740.JPG";
import img741 from "@/assets/images/gallery/IMG_0741.JPG";
import img742 from "@/assets/images/gallery/IMG_0742.JPG";
import img743 from "@/assets/images/gallery/IMG_0743.JPG";
import img744 from "@/assets/images/gallery/IMG_0744.JPG";
import img745 from "@/assets/images/gallery/IMG_0745.JPG";
import img746 from "@/assets/images/gallery/IMG_0746.JPG";
import img747 from "@/assets/images/gallery/IMG_0747.JPG";
import img748 from "@/assets/images/gallery/IMG_0748.JPG";
import img749 from "@/assets/images/gallery/IMG_0749.JPG";
import img750 from "@/assets/images/gallery/IMG_0750.JPG";
import img751 from "@/assets/images/gallery/IMG_0751.JPG";
import img752 from "@/assets/images/gallery/IMG_0752.JPG";
import img753 from "@/assets/images/gallery/IMG_0753.JPG";
import img754 from "@/assets/images/gallery/IMG_0754.JPG";
import img755 from "@/assets/images/gallery/IMG_0755.JPG";
import img756 from "@/assets/images/gallery/IMG_0756.JPG";
import img757 from "@/assets/images/gallery/IMG_0757.JPG";
import img758 from "@/assets/images/gallery/IMG_0758.JPG";
import img759 from "@/assets/images/gallery/IMG_0759.JPG";
import img760 from "@/assets/images/gallery/IMG_0760.JPG";
import img781 from "@/assets/images/gallery/IMG_0781.JPG";
import img782 from "@/assets/images/gallery/IMG_0782.JPG";
import img783 from "@/assets/images/gallery/IMG_0783.JPG";
import img784 from "@/assets/images/gallery/IMG_0784.JPG";
import img785 from "@/assets/images/gallery/IMG_0785.JPG";
import img786 from "@/assets/images/gallery/IMG_0786.JPG";
import img787 from "@/assets/images/gallery/IMG_0787.JPG";
import img788 from "@/assets/images/gallery/IMG_0788.JPG";
import img789 from "@/assets/images/gallery/IMG_0789.JPG";
import img790 from "@/assets/images/gallery/IMG_0790.JPG";
import img791 from "@/assets/images/gallery/IMG_0791.JPG";
import img792 from "@/assets/images/gallery/IMG_0792.JPG";
import img793 from "@/assets/images/gallery/IMG_0793.JPG";
import img794 from "@/assets/images/gallery/IMG_0794.JPG";
import img795 from "@/assets/images/gallery/IMG_0795.JPG";
import img796 from "@/assets/images/gallery/IMG_0796.JPG";
import img797 from "@/assets/images/gallery/IMG_0797.JPG";
import img799 from "@/assets/images/gallery/IMG_0799.JPG";
import img800 from "@/assets/images/gallery/IMG_0800.JPG";
import img801 from "@/assets/images/gallery/IMG_0801.JPG";
import img802 from "@/assets/images/gallery/IMG_0802.JPG";
import img803 from "@/assets/images/gallery/IMG_0803.JPG";
import img804 from "@/assets/images/gallery/IMG_0804.JPG";
import img805 from "@/assets/images/gallery/IMG_0805.JPG";
import img806 from "@/assets/images/gallery/IMG_0806.JPG";
import img807 from "@/assets/images/gallery/IMG_0807.JPG";
import img808 from "@/assets/images/gallery/IMG_0808.JPG";
import img809 from "@/assets/images/gallery/IMG_0809.JPG";
import img810 from "@/assets/images/gallery/IMG_0810.JPG";
import img811 from "@/assets/images/gallery/IMG_0811.JPG";
import img812 from "@/assets/images/gallery/IMG_0812.JPG";
import img813 from "@/assets/images/gallery/IMG_0813.JPG";
import img814 from "@/assets/images/gallery/IMG_0814.JPG";
import img815 from "@/assets/images/gallery/IMG_0815.JPG";
import img816 from "@/assets/images/gallery/IMG_0816.JPG";
import img817 from "@/assets/images/gallery/IMG_0817.JPG";
import img818 from "@/assets/images/gallery/IMG_0818.JPG";
import img819 from "@/assets/images/gallery/IMG_0819.JPG";
import img820 from "@/assets/images/gallery/IMG_0820.JPG";
import img821 from "@/assets/images/gallery/IMG_0821.JPG";
import img822 from "@/assets/images/gallery/IMG_0822.JPG";
import img823 from "@/assets/images/gallery/IMG_0823.JPG";
import img824 from "@/assets/images/gallery/IMG_0824.JPG";
import img825 from "@/assets/images/gallery/IMG_0825.JPG";
import img826 from "@/assets/images/gallery/IMG_0826.JPG";
import img827 from "@/assets/images/gallery/IMG_0827.JPG";
import img828 from "@/assets/images/gallery/IMG_0828.JPG";
import img829 from "@/assets/images/gallery/IMG_0829.JPG";
import img830 from "@/assets/images/gallery/IMG_0830.JPG";
import img831 from "@/assets/images/gallery/IMG_0831.JPG";
import img832 from "@/assets/images/gallery/IMG_0832.JPG";
import img833 from "@/assets/images/gallery/IMG_0833.JPG";
import img834 from "@/assets/images/gallery/IMG_0834.JPG";
import img835 from "@/assets/images/gallery/IMG_0835.JPG";
import img836 from "@/assets/images/gallery/IMG_0836.JPG";
import img837 from "@/assets/images/gallery/IMG_0837.JPG";
import img838 from "@/assets/images/gallery/IMG_0838.JPG";
import img839 from "@/assets/images/gallery/IMG_0839.JPG";
import img840 from "@/assets/images/gallery/IMG_0840.JPG";
import img861 from "@/assets/images/gallery/IMG_0861_1772124157505.JPG";
import img862 from "@/assets/images/gallery/IMG_0862_1772124157505.JPG";
import img863 from "@/assets/images/gallery/IMG_0863_1772124157506.JPG";
import img864 from "@/assets/images/gallery/IMG_0864_1772124157506.JPG";
import img865 from "@/assets/images/gallery/IMG_0865_1772124157506.JPG";
import img866 from "@/assets/images/gallery/IMG_0866_1772124157506.JPG";
import img867 from "@/assets/images/gallery/IMG_0867_1772124157507.JPG";
import img868 from "@/assets/images/gallery/IMG_0868_1772124157507.JPG";
import img869 from "@/assets/images/gallery/IMG_0869_1772124157507.JPG";
import img870 from "@/assets/images/gallery/IMG_0870_1772124157507.JPG";
import img871 from "@/assets/images/gallery/IMG_0871_1772124157508.JPG";
import img872 from "@/assets/images/gallery/IMG_0872_1772124157508.JPG";
import img873 from "@/assets/images/gallery/IMG_0873_1772124157508.JPG";
import img874 from "@/assets/images/gallery/IMG_0874_1772124157508.JPG";
import img875 from "@/assets/images/gallery/IMG_0875_1772124157508.JPG";
import img876 from "@/assets/images/gallery/IMG_0876_1772124157508.JPG";
import img877 from "@/assets/images/gallery/IMG_0877_1772124157509.JPG";
import img878 from "@/assets/images/gallery/IMG_0878_1772124157509.JPG";
import img879 from "@/assets/images/gallery/IMG_0879_1772124157510.JPG";
import img880 from "@/assets/images/gallery/IMG_0880_1772124157510.JPG";
import img881 from "@/assets/images/gallery/IMG_0881_1772124242158.JPG";
import img882 from "@/assets/images/gallery/IMG_0882_1772124242159.JPG";
import img883 from "@/assets/images/gallery/IMG_0883_1772124242159.JPG";
import img884 from "@/assets/images/gallery/IMG_0884_1772124242160.JPG";
import img885 from "@/assets/images/gallery/IMG_0885_1772124242160.JPG";
import img886 from "@/assets/images/gallery/IMG_0886_1772124242160.JPG";
import img887 from "@/assets/images/gallery/IMG_0887_1772124242161.JPG";
import img888 from "@/assets/images/gallery/IMG_0888_1772124242161.JPG";
import img889 from "@/assets/images/gallery/IMG_0889_1772124242161.JPG";
import img890 from "@/assets/images/gallery/IMG_0890_1772124242162.JPG";
import img891 from "@/assets/images/gallery/IMG_0891_1772124242162.JPG";
import img892 from "@/assets/images/gallery/IMG_0892_1772124242162.JPG";
import img893 from "@/assets/images/gallery/IMG_0893_1772124242162.JPG";
import img894 from "@/assets/images/gallery/IMG_0894_1772124242163.JPG";
import img895 from "@/assets/images/gallery/IMG_0895_1772124242163.JPG";
import img897 from "@/assets/images/gallery/IMG_0897_1772124242163.JPG";
import img898 from "@/assets/images/gallery/IMG_0898_1772124242164.JPG";
import img899 from "@/assets/images/gallery/IMG_0899_1772124242164.JPG";
import img900 from "@/assets/images/gallery/IMG_0900_1772124242164.JPG";
import img901 from "@/assets/images/gallery/IMG_0901_1772124343042.JPG";
import img902 from "@/assets/images/gallery/IMG_0902_1772124343043.JPG";
import img903 from "@/assets/images/gallery/IMG_0903_1772124343043.JPG";
import img904 from "@/assets/images/gallery/IMG_0904_1772124343043.JPG";
import img905 from "@/assets/images/gallery/IMG_0905_1772124343043.JPG";
import img906 from "@/assets/images/gallery/IMG_0906_1772124343044.JPG";
import img907 from "@/assets/images/gallery/IMG_0907_1772124343044.JPG";
import img908 from "@/assets/images/gallery/IMG_0908_1772124343044.JPG";
import img909 from "@/assets/images/gallery/IMG_0909_1772124343044.JPG";
import img910 from "@/assets/images/gallery/IMG_0910_1772124343044.JPG";
import img911 from "@/assets/images/gallery/IMG_0911_1772124343045.JPG";
import img912 from "@/assets/images/gallery/IMG_0912_1772124343045.JPG";
import img913 from "@/assets/images/gallery/IMG_0913_1772124343045.JPG";
import img914 from "@/assets/images/gallery/IMG_0914_1772124343045.JPG";
import img915 from "@/assets/images/gallery/IMG_0915_1772124343046.JPG";
import img916 from "@/assets/images/gallery/IMG_0916_1772124343046.JPG";
import img917 from "@/assets/images/gallery/IMG_0917_1772124343046.JPG";
import img918 from "@/assets/images/gallery/IMG_0918_1772124343046.JPG";
import img919 from "@/assets/images/gallery/IMG_0919_1772124343046.JPG";
import img920 from "@/assets/images/gallery/IMG_0920_1772124343047.JPG";
import img941 from "@/assets/images/gallery/IMG_0941_1772124530173.JPG";
import img942 from "@/assets/images/gallery/IMG_0942_1772124530174.JPG";
import img943 from "@/assets/images/gallery/IMG_0943_1772124530175.JPG";
import img944 from "@/assets/images/gallery/IMG_0944_1772124530175.JPG";
import img945 from "@/assets/images/gallery/IMG_0945_1772124530176.JPG";
import img946 from "@/assets/images/gallery/IMG_0946_1772124530176.JPG";
import img947 from "@/assets/images/gallery/IMG_0947_1772124530176.JPG";
import img948 from "@/assets/images/gallery/IMG_0948_1772124530177.JPG";
import img949 from "@/assets/images/gallery/IMG_0949_1772124530177.JPG";
import img950 from "@/assets/images/gallery/IMG_0950_1772124530178.JPG";
import img951 from "@/assets/images/gallery/IMG_0951_1772124530178.JPG";
import img952 from "@/assets/images/gallery/IMG_0952_1772124530178.JPG";
import img953 from "@/assets/images/gallery/IMG_0953_1772124530178.JPG";
import img954 from "@/assets/images/gallery/IMG_0954_1772124530179.JPG";
import img955 from "@/assets/images/gallery/IMG_0955_1772124530179.JPG";
import img956 from "@/assets/images/gallery/IMG_0956_1772124530180.JPG";
import img957 from "@/assets/images/gallery/IMG_0957_1772124530180.JPG";
import img958 from "@/assets/images/gallery/IMG_0958_1772124530180.JPG";
import img959 from "@/assets/images/gallery/IMG_0959_1772124530181.JPG";
import img960 from "@/assets/images/gallery/IMG_0960_1772124530181.JPG";
import img961 from "@/assets/images/gallery/IMG_0961_1772124639057.JPG";
import img962 from "@/assets/images/gallery/IMG_0962_1772124639057.JPG";
import img963 from "@/assets/images/gallery/IMG_0963_1772124639057.JPG";
import img964 from "@/assets/images/gallery/IMG_0964_1772124639058.JPG";
import img965 from "@/assets/images/gallery/IMG_0965_1772124639058.JPG";
import img966 from "@/assets/images/gallery/IMG_0966_1772124639058.JPG";
import img967 from "@/assets/images/gallery/IMG_0967_1772124639058.JPG";
import img968 from "@/assets/images/gallery/IMG_0968_1772124639058.JPG";
import img969 from "@/assets/images/gallery/IMG_0969_1772124639059.JPG";
import img970 from "@/assets/images/gallery/IMG_0970_1772124639059.JPG";
import img971 from "@/assets/images/gallery/IMG_0971_1772124639059.JPG";
import img972 from "@/assets/images/gallery/IMG_0972_1772124639059.JPG";
import img973 from "@/assets/images/gallery/IMG_0973_1772124639059.JPG";
import img974 from "@/assets/images/gallery/IMG_0974_1772124639060.JPG";
import img975 from "@/assets/images/gallery/IMG_0975_1772124639060.JPG";
import img976 from "@/assets/images/gallery/IMG_0976_1772124639060.JPG";
import img977 from "@/assets/images/gallery/IMG_0977_1772124639060.JPG";
import img978 from "@/assets/images/gallery/IMG_0978_1772124639060.JPG";
import img979 from "@/assets/images/gallery/IMG_0979_1772124639061.JPG";
import img980 from "@/assets/images/gallery/IMG_0980_1772124639061.JPG";
import img981 from "@/assets/images/gallery/IMG_0981_1772124764539.JPG";
import img982 from "@/assets/images/gallery/IMG_0982_1772124764540.JPG";
import img983 from "@/assets/images/gallery/IMG_0983_1772124764540.JPG";
import img984 from "@/assets/images/gallery/IMG_0984_1772124764540.JPG";
import img985 from "@/assets/images/gallery/IMG_0985_1772124764541.JPG";
import img986 from "@/assets/images/gallery/IMG_0986_1772124764541.JPG";
import img987 from "@/assets/images/gallery/IMG_0987_1772124764541.JPG";
import img988 from "@/assets/images/gallery/IMG_0988_1772124764541.JPG";
import img989 from "@/assets/images/gallery/IMG_0989_1772124764542.JPG";
import img990 from "@/assets/images/gallery/IMG_0990_1772124764542.JPG";
import img991 from "@/assets/images/gallery/IMG_0991_1772124764542.JPG";
import img992 from "@/assets/images/gallery/IMG_0992_1772124764542.JPG";
import img993 from "@/assets/images/gallery/IMG_0993_1772124764542.JPG";
import img994 from "@/assets/images/gallery/IMG_0994_1772124764543.JPG";
import img995 from "@/assets/images/gallery/IMG_0995_1772124764543.JPG";
import img996 from "@/assets/images/gallery/IMG_0996_1772124764543.JPG";
import img997 from "@/assets/images/gallery/IMG_0997_1772124764544.JPG";
import img998 from "@/assets/images/gallery/IMG_0998_1772124764544.JPG";
import img999 from "@/assets/images/gallery/IMG_0999_1772124764544.JPG";
import img1001 from "@/assets/images/gallery/IMG_1001_1772124764545.JPG";
import img1002 from "@/assets/images/gallery/IMG_1002.JPG";
import img1003 from "@/assets/images/gallery/IMG_1003.JPG";
import img1004 from "@/assets/images/gallery/IMG_1004.JPG";
import img1005 from "@/assets/images/gallery/IMG_1005.JPG";
import img1006 from "@/assets/images/gallery/IMG_1006.JPG";
import img1007 from "@/assets/images/gallery/IMG_1007.JPG";
import img1008 from "@/assets/images/gallery/IMG_1008.JPG";
import img1009 from "@/assets/images/gallery/IMG_1009.JPG";
import img1010 from "@/assets/images/gallery/IMG_1010.JPG";
import img1011 from "@/assets/images/gallery/IMG_1011.JPG";
import img1012 from "@/assets/images/gallery/IMG_1012.JPG";
import img1013 from "@/assets/images/gallery/IMG_1013.JPG";
import img1014 from "@/assets/images/gallery/IMG_1014.JPG";
import img1015 from "@/assets/images/gallery/IMG_1015.JPG";
import img1016 from "@/assets/images/gallery/IMG_1016.JPG";
import img1017 from "@/assets/images/gallery/IMG_1017.JPG";
import img1018 from "@/assets/images/gallery/IMG_1018.JPG";
import img1019 from "@/assets/images/gallery/IMG_1019.JPG";
import img1020 from "@/assets/images/gallery/IMG_1020.JPG";
import img1021 from "@/assets/images/gallery/IMG_1021.JPG";
import img1022 from "@/assets/images/gallery/IMG_1022.JPG";
import img1023 from "@/assets/images/gallery/IMG_1023.JPG";
import img1024 from "@/assets/images/gallery/IMG_1024.JPG";
import img1025 from "@/assets/images/gallery/IMG_1025.JPG";
import img1026 from "@/assets/images/gallery/IMG_1026.JPG";
import img1027 from "@/assets/images/gallery/IMG_1027.JPG";
import img1028 from "@/assets/images/gallery/IMG_1028.JPG";
import img1029 from "@/assets/images/gallery/IMG_1029.JPG";
import img1030 from "@/assets/images/gallery/IMG_1030.JPG";
import img1031 from "@/assets/images/gallery/IMG_1031.JPG";
import img1032 from "@/assets/images/gallery/IMG_1032.JPG";
import img1033 from "@/assets/images/gallery/IMG_1033.JPG";
import img1034 from "@/assets/images/gallery/IMG_1034.JPG";
import img1035 from "@/assets/images/gallery/IMG_1035.JPG";
import img1036 from "@/assets/images/gallery/IMG_1036.JPG";
import img1037 from "@/assets/images/gallery/IMG_1037.JPG";
import img1038 from "@/assets/images/gallery/IMG_1038.JPG";
import img1039 from "@/assets/images/gallery/IMG_1039.JPG";
import img1040 from "@/assets/images/gallery/IMG_1040.JPG";
import img1041 from "@/assets/images/gallery/IMG_1041.JPG";
import img1042 from "@/assets/images/gallery/IMG_1042.JPG";
import img1043 from "@/assets/images/gallery/IMG_1043.JPG";
import img1044 from "@/assets/images/gallery/IMG_1044.JPG";
import img1045 from "@/assets/images/gallery/IMG_1045.JPG";
import img1046 from "@/assets/images/gallery/IMG_1046.JPG";
import img1047 from "@/assets/images/gallery/IMG_1047.JPG";
import img1048 from "@/assets/images/gallery/IMG_1048.JPG";
import img1049 from "@/assets/images/gallery/IMG_1049.JPG";
import img1050 from "@/assets/images/gallery/IMG_1050.JPG";
import img1051 from "@/assets/images/gallery/IMG_1051.JPG";
import img1052 from "@/assets/images/gallery/IMG_1052.JPG";
import img1053 from "@/assets/images/gallery/IMG_1053.JPG";
import img1054 from "@/assets/images/gallery/IMG_1054.JPG";
import img1055 from "@/assets/images/gallery/IMG_1055.JPG";
import img1056 from "@/assets/images/gallery/IMG_1056.JPG";
import img1057 from "@/assets/images/gallery/IMG_1057.JPG";
import img1058 from "@/assets/images/gallery/IMG_1058.JPG";
import img1059 from "@/assets/images/gallery/IMG_1059.JPG";
import img1060 from "@/assets/images/gallery/IMG_1060.JPG";
import img1061 from "@/assets/images/gallery/IMG_1061.JPG";
import img1062 from "@/assets/images/gallery/IMG_1062.jpg";
import img1063 from "@/assets/images/gallery/IMG_1063.jpg";
import img1064 from "@/assets/images/gallery/IMG_1064.jpg";
import img1065 from "@/assets/images/gallery/IMG_1065.jpg";
import img1066 from "@/assets/images/gallery/IMG_1066.jpg";
import img1067 from "@/assets/images/gallery/IMG_1067.jpg";
import img1068 from "@/assets/images/gallery/IMG_1068.jpg";
import img1069 from "@/assets/images/gallery/IMG_1069.jpg";
import img1070 from "@/assets/images/gallery/IMG_1070.jpg";
import img1071 from "@/assets/images/gallery/IMG_1071.jpg";
import img1072 from "@/assets/images/gallery/IMG_1072.jpg";
import img1073 from "@/assets/images/gallery/IMG_1073.jpg";
import img1074 from "@/assets/images/gallery/IMG_1074.jpg";
import img1075 from "@/assets/images/gallery/IMG_1075.jpg";
import img1076 from "@/assets/images/gallery/IMG_1076.jpg";
import img1077 from "@/assets/images/gallery/IMG_1077.jpg";
import img1078 from "@/assets/images/gallery/IMG_1078.jpg";
import img1079 from "@/assets/images/gallery/IMG_1079.jpg";
import img1080 from "@/assets/images/gallery/IMG_1080.jpg";
import img1081 from "@/assets/images/gallery/IMG_1081.jpg";
import img1082 from "@/assets/images/gallery/IMG_1082.jpg";
import img1083 from "@/assets/images/gallery/IMG_1083.jpg";
import img1084 from "@/assets/images/gallery/IMG_1084.jpg";
import img1085 from "@/assets/images/gallery/IMG_1085.jpg";
import img1086 from "@/assets/images/gallery/IMG_1086.jpg";
import img1087 from "@/assets/images/gallery/IMG_1087.jpg";
import img1088 from "@/assets/images/gallery/IMG_1088.jpg";
import img1089 from "@/assets/images/gallery/IMG_1089.jpg";
import img1090 from "@/assets/images/gallery/IMG_1090.jpg";
import img1091 from "@/assets/images/gallery/IMG_1091.jpg";
import img1092 from "@/assets/images/gallery/IMG_1092.jpg";
import img1093 from "@/assets/images/gallery/IMG_1093.jpg";
import img1094 from "@/assets/images/gallery/IMG_1094.jpg";
import img1095 from "@/assets/images/gallery/IMG_1095.jpg";
import img1096 from "@/assets/images/gallery/IMG_1096.jpg";
import img1097 from "@/assets/images/gallery/IMG_1097.jpg";
import img1098 from "@/assets/images/gallery/IMG_1098.jpg";
import img1099 from "@/assets/images/gallery/IMG_1099.jpg";
import img1100 from "@/assets/images/gallery/IMG_1100.jpg";
import img1101 from "@/assets/images/gallery/IMG_1101.jpg";
import img1102 from "@/assets/images/gallery/IMG_1102.jpg";
import img1103 from "@/assets/images/gallery/IMG_1103.jpg";
import img1104 from "@/assets/images/gallery/IMG_1104.jpg";
import img1105 from "@/assets/images/gallery/IMG_1105.jpg";
import img1106 from "@/assets/images/gallery/IMG_1106.jpg";
import img1107 from "@/assets/images/gallery/IMG_1107.jpg";
import img1108 from "@/assets/images/gallery/IMG_1108.jpg";
import img1109 from "@/assets/images/gallery/IMG_1109.jpg";
import img1110 from "@/assets/images/gallery/IMG_1110.jpg";
import img1111 from "@/assets/images/gallery/IMG_1111.jpg";
import img1112 from "@/assets/images/gallery/IMG_1112.jpg";
import img1113 from "@/assets/images/gallery/IMG_1113.jpg";
import img1114 from "@/assets/images/gallery/IMG_1114.jpg";
import img1115 from "@/assets/images/gallery/IMG_1115.jpg";
import img1116 from "@/assets/images/gallery/IMG_1116.jpg";
import img1117 from "@/assets/images/gallery/IMG_1117.jpg";
import img1118 from "@/assets/images/gallery/IMG_1118.jpg";
import img1119 from "@/assets/images/gallery/IMG_1119.jpg";
import img1120 from "@/assets/images/gallery/IMG_1120.jpg";
import img1121 from "@/assets/images/gallery/IMG_1121.jpg";
import img1122 from "@/assets/images/gallery/IMG_1122.jpg";
import img1123 from "@/assets/images/gallery/IMG_1123.jpg";
import img1124 from "@/assets/images/gallery/IMG_1124.jpg";
import img1125 from "@/assets/images/gallery/IMG_1125.jpg";
import img1126 from "@/assets/images/gallery/IMG_1126.jpg";
import img1127 from "@/assets/images/gallery/IMG_1127.jpg";
import img1128 from "@/assets/images/gallery/IMG_1128.jpg";
import img1129 from "@/assets/images/gallery/IMG_1129.jpg";
import img1130 from "@/assets/images/gallery/IMG_1130.jpg";
import img1131 from "@/assets/images/gallery/IMG_1131.jpg";
import img1132 from "@/assets/images/gallery/IMG_1132.jpg";
import img1133 from "@/assets/images/gallery/IMG_1133.jpg";
import img1134 from "@/assets/images/gallery/IMG_1134.jpg";
import img1135 from "@/assets/images/gallery/IMG_1135.jpg";
import img1136 from "@/assets/images/gallery/IMG_1136.jpg";
import img1137 from "@/assets/images/gallery/IMG_1137.jpg";
import img1138 from "@/assets/images/gallery/IMG_1138.jpg";
import img1139 from "@/assets/images/gallery/IMG_1139.jpg";
import img1140 from "@/assets/images/gallery/IMG_1140.jpg";
import img1141 from "@/assets/images/gallery/IMG_1141.jpg";
import img1142 from "@/assets/images/gallery/IMG_1142.jpg";
import img1144 from "@/assets/images/gallery/IMG_1144.jpg";
import img1145 from "@/assets/images/gallery/IMG_1145.jpg";
import img1146 from "@/assets/images/gallery/IMG_1146.jpg";
import img1147 from "@/assets/images/gallery/IMG_1147.jpg";
import img1148 from "@/assets/images/gallery/IMG_1148.jpg";
import img1149 from "@/assets/images/gallery/IMG_1149.jpg";
import img1150 from "@/assets/images/gallery/IMG_1150.jpg";
import img1151 from "@/assets/images/gallery/IMG_1151.jpg";
import img1152 from "@/assets/images/gallery/IMG_1152.jpg";
import img1153 from "@/assets/images/gallery/IMG_1153.jpg";
import img1154 from "@/assets/images/gallery/IMG_1154.jpg";
import img1155 from "@/assets/images/gallery/IMG_1155.jpg";
import img1156 from "@/assets/images/gallery/IMG_1156.jpg";
import img1157 from "@/assets/images/gallery/IMG_1157.jpg";
import img1158 from "@/assets/images/gallery/IMG_1158.jpg";
import img1160 from "@/assets/images/gallery/IMG_1160.jpg";
import img1161 from "@/assets/images/gallery/IMG_1161.jpg";
import img1164 from "@/assets/images/gallery/IMG_1164.jpg";
import img1165 from "@/assets/images/gallery/IMG_1165.jpg";
import img1166 from "@/assets/images/gallery/IMG_1166.jpg";
import img1167 from "@/assets/images/gallery/IMG_1167.jpg";
import img1169 from "@/assets/images/gallery/IMG_1169.jpg";
import img1170 from "@/assets/images/gallery/IMG_1170.jpg";
import img1171 from "@/assets/images/gallery/IMG_1171.jpg";
import img1172 from "@/assets/images/gallery/IMG_1172.jpg";
import img1173 from "@/assets/images/gallery/IMG_1173.jpg";
import img1174 from "@/assets/images/gallery/IMG_1174.jpg";
import img1175 from "@/assets/images/gallery/IMG_1175.jpg";
import img1176 from "@/assets/images/gallery/IMG_1176.jpg";
import img1177 from "@/assets/images/gallery/IMG_1177.jpg";
import img1178 from "@/assets/images/gallery/IMG_1178.jpg";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  projectId: string;
}

const galleryImages: GalleryImage[] = [
  { id: "1", src: img33, alt: "Brushless motor controller with wiring harness on workbench", projectId: "project-1" },
  { id: "2", src: img34, alt: "Wire connector splices with blue crimp caps", projectId: "project-1" },
  { id: "3", src: img35, alt: "XT60 connector and power wire soldering", projectId: "project-1" },
  { id: "4", src: img36, alt: "500W brushless controller with wiring laid out", projectId: "project-1" },
  { id: "5", src: img37, alt: "Bird/Lyft scooter conversion in workshop", projectId: "project-2" },
  { id: "6", src: img38, alt: "Electric scooter rear wheel and workshop setup", projectId: "project-2" },
  { id: "7", src: img39, alt: "Full workshop view with scooter build in progress", projectId: "project-2" },
  { id: "8", src: img46, alt: "Bird scooter stems with Lyft branding close-up", projectId: "project-2" },
  { id: "9", src: img40, alt: "Controller installed inside scooter deck chassis", projectId: "project-3" },
  { id: "10", src: img41, alt: "Rear wheel motor and controller mounting detail", projectId: "project-3" },
  { id: "11", src: img42, alt: "Disc brake and reflector with internal wiring", projectId: "project-3" },
  { id: "12", src: img43, alt: "Controller wiring routed through scooter frame", projectId: "project-3" },
  { id: "13", src: img44, alt: "Scooter deck internal chassis view", projectId: "project-3" },
  { id: "14", src: img45, alt: "Completed wiring with controller mounted in deck", projectId: "project-3" },
  { id: "15", src: img399, alt: "Top reverse shell one-liners cheat sheet", projectId: "project-4" },
  { id: "16", src: img400, alt: "SQL JOINS cheat sheet with Venn diagrams", projectId: "project-4" },
  { id: "17", src: img401, alt: "Wireshark frameworks and tools infographic", projectId: "project-4" },
  { id: "18", src: img402, alt: "Wireshark display filters - Ethernet, ARP, IP", projectId: "project-4" },
  { id: "19", src: img403, alt: "Wireshark display filters - IP flags, IPv6", projectId: "project-4" },
  { id: "20", src: img404, alt: "Wireshark display filters - IPv6, TCP", projectId: "project-4" },
  { id: "21", src: img405, alt: "Wireshark display filters - ICMP, ICMPv6, HTTP", projectId: "project-4" },
  { id: "22", src: img406, alt: "HexSec cybersecurity community infographic", projectId: "project-4" },
  { id: "23", src: img407, alt: "Custom PC build with green LED lighting", projectId: "project-5" },
  { id: "24", src: img408, alt: "Dual laptop workstation with external display", projectId: "project-5" },
  { id: "25", src: img409, alt: "Desktop PC with blue RGB fan lighting", projectId: "project-5" },
  { id: "26", src: img410, alt: "Scooter workshop with tools and parts storage", projectId: "project-2" },
  { id: "27", src: img502, alt: "Building AI Agents - curated learning resources", projectId: "project-4" },
  { id: "28", src: img503, alt: "OSINT tools - sites that expose hidden information", projectId: "project-4" },
  { id: "29", src: img504, alt: "Privacy and security tools the government hopes you never find", projectId: "project-7" },
  { id: "30", src: img505, alt: "SimpleLogin - anonymous email alias service", projectId: "project-7" },
  { id: "31", src: img506, alt: "Security Headers - website security scanner by Snyk", projectId: "project-4" },
  { id: "32", src: img515, alt: "Photon - fast OSINT web crawler for hidden endpoints", projectId: "project-4" },
  { id: "33", src: img516, alt: "Wappalyzer - identify technologies on any website", projectId: "project-4" },
  { id: "34", src: img517, alt: "Privacy Badger - EFF tracker blocking extension", projectId: "project-7" },
  { id: "35", src: img507, alt: "Macrotrends - free stock and economic charts", projectId: "project-9" },
  { id: "36", src: img508, alt: "Vectorizer.ai - raster to vector image converter", projectId: "project-6" },
  { id: "37", src: img509, alt: "LottieFiles - free lightweight web animations", projectId: "project-9" },
  { id: "38", src: img510, alt: "NewsGuard - news website trustworthiness ratings", projectId: "project-9" },
  { id: "39", src: img511, alt: "Rome2Rio - global transport route finder", projectId: "project-9" },
  { id: "40", src: img513, alt: "Standard Ebooks - free public domain ebooks", projectId: "project-9" },
  { id: "41", src: img514, alt: "arXiv - free preprint server for science papers", projectId: "project-9" },
  { id: "42", src: img518, alt: "Finviz - free stock screener and market visualizer", projectId: "project-9" },
  { id: "43", src: img519, alt: "Numbeo - global cost of living comparison tool", projectId: "project-9" },
  { id: "44", src: img521, alt: "BrowserLeaks - browser data exposure testing suite", projectId: "project-7" },
  { id: "45", src: img522, alt: "Tuta - end-to-end encrypted email with zero knowledge", projectId: "project-7" },
  { id: "46", src: img523, alt: "KeePassXC - offline open-source password manager", projectId: "project-7" },
  { id: "47", src: img524, alt: "Cover Your Tracks - EFF browser fingerprint tester", projectId: "project-7" },
  { id: "48", src: img525, alt: "PrivacyTools.io - curated privacy software guide", projectId: "project-7" },
  { id: "49", src: img526, alt: "Shodan Monitor - internet exposure vulnerability scanner", projectId: "project-4" },
  { id: "50", src: img528, alt: "Keyboard shortcuts cheat sheet for power users", projectId: "project-4" },
  { id: "51", src: img531, alt: "PimEyes - facial recognition reverse image search", projectId: "project-4" },
  { id: "52", src: img536, alt: "Free powerful Windows applications to bookmark", projectId: "project-4" },
  { id: "53", src: img527, alt: "CamelCamelCamel - Amazon price history tracker", projectId: "project-9" },
  { id: "54", src: img529, alt: "Summarize.tech - AI-powered YouTube video summaries", projectId: "project-6" },
  { id: "55", src: img530, alt: "ssstik.io - TikTok video downloader without watermarks", projectId: "project-6" },
  { id: "56", src: img532, alt: "Google Patents - comprehensive patent search database", projectId: "project-9" },
  { id: "57", src: img533, alt: "Looka - AI-powered logo and brand identity designer", projectId: "project-6" },
  { id: "58", src: img534, alt: "WaveApps - free accounting and invoicing software", projectId: "project-9" },
  { id: "59", src: img535, alt: "ClickUp - all-in-one productivity and project management", projectId: "project-9" },
  { id: "60", src: img537, alt: "CORE - open-access research paper aggregator", projectId: "project-9" },
  { id: "61", src: img538, alt: "Semantic Scholar - AI-powered scientific literature search", projectId: "project-6" },
  { id: "62", src: img539, alt: "DOAJ - directory of open access journals", projectId: "project-9" },
  { id: "63", src: img540, alt: "Perma.cc - permanent unbreakable web archive links", projectId: "project-9" },
  { id: "64", src: img541, alt: "Ghostarchive - archives YouTube videos and tweets before deletion", projectId: "project-4" },
  { id: "65", src: img542, alt: "AllYouCanRead - free magazines and newspapers from every country", projectId: "project-9" },
  { id: "66", src: img543, alt: "IntelTechniques - OSINT toolkit for digital footprint investigation", projectId: "project-4" },
  { id: "67", src: img544, alt: "Secret platforms the internet doesn't want you to know exist", projectId: "project-4" },
  { id: "68", src: img545, alt: "Must-know Windows commands cheat sheet for power users", projectId: "project-9" },
  { id: "69", src: img546, alt: "Advanced security tools to prevent against hacking attempts", projectId: "project-4" },
  { id: "70", src: img547, alt: "Must-know hidden Windows applications for productivity", projectId: "project-9" },
  { id: "71", src: img548, alt: "Must-know free applications replacing paid software", projectId: "project-9" },
  { id: "72", src: img549, alt: "No-code platforms that build real businesses", projectId: "project-9" },
  { id: "73", src: img550, alt: "Remote work tools that replace your office completely", projectId: "project-9" },
  { id: "74", src: img551, alt: "Free applications replacing expensive software", projectId: "project-9" },
  { id: "75", src: img552, alt: "Must-have browser extensions for productivity and privacy", projectId: "project-9" },
  { id: "76", src: img553, alt: "Powerful video editing tools to bookmark", projectId: "project-9" },
  { id: "77", src: img554, alt: "Must-know platforms for every developer", projectId: "project-9" },
  { id: "78", src: img555, alt: "Websites where you can grab free tech courses", projectId: "project-9" },
  { id: "79", src: img556, alt: "Must-know powerful search engines beyond Google", projectId: "project-9" },
  { id: "80", src: img557, alt: "Best websites to make money online currently", projectId: "project-9" },
  { id: "81", src: img558, alt: "Keyboard shortcuts to bookmark for everyday use", projectId: "project-9" },
  { id: "82", src: img559, alt: "More GitHub repositories to bookmark for developers", projectId: "project-9" },
  { id: "83", src: img560, alt: "Best tools for any research in 2026", projectId: "project-10" },
  { id: "84", src: img561, alt: "Best YouTube channels to learn any tech skill", projectId: "project-9" },
  { id: "85", src: img562, alt: "Must-know Git commands cheat sheet for developers", projectId: "project-9" },
  { id: "86", src: img563, alt: "GitHub repositories that feel illegal to know", projectId: "project-4" },
  { id: "87", src: img564, alt: "Must-know Windows keyboard shortcuts reference", projectId: "project-9" },
  { id: "88", src: img565, alt: "Websites to learn any tech skill for free in 2026", projectId: "project-9" },
  { id: "89", src: img566, alt: "Tools Google doesn't want you to know about", projectId: "project-4" },
  { id: "90", src: img567, alt: "Must-know websites for every tech enthusiast", projectId: "project-9" },
  { id: "91", src: img568, alt: "Underground browsers built for power users", projectId: "project-4" },
  { id: "92", src: img569, alt: "Command-line tricks to speed up any PC instantly", projectId: "project-9" },
  { id: "93", src: img570, alt: "Free Chrome extensions that feel illegal to know", projectId: "project-9" },
  { id: "94", src: img571, alt: "40 one-click websites to convert anything", projectId: "project-9" },
  { id: "95", src: img572, alt: "Best AI tools to run your tasks like a pro", projectId: "project-6" },
  { id: "96", src: img573, alt: "Open-source alternatives to expensive SaaS subscriptions", projectId: "project-9" },
  { id: "97", src: img574, alt: "Must-know Windows commands - 40 essential commands", projectId: "project-9" },
  { id: "98", src: img575, alt: "High-paying freelance websites beginners can join today", projectId: "project-9" },
  { id: "99", src: img576, alt: "AI bots that apply to jobs and land interviews on autopilot", projectId: "project-6" },
  { id: "100", src: img577, alt: "Websites AI pros quietly use for models and inference", projectId: "project-6" },
  { id: "101", src: img578, alt: "Free design resources that look premium", projectId: "project-9" },
  { id: "102", src: img579, alt: "Low-competition websites to make money online", projectId: "project-9" },
  { id: "103", src: img580, alt: "Hottest AI skills to master in 2026", projectId: "project-6" },
  { id: "104", src: img581, alt: "Websites every developer should know", projectId: "project-9" },
  { id: "105", src: img582, alt: "AI tools to build profitable products fast", projectId: "project-6" },
  { id: "106", src: img583, alt: "Websites high-income freelancers quietly use", projectId: "project-9" },
  { id: "107", src: img584, alt: "Hidden powerful AI tools most people don't know", projectId: "project-6" },
  { id: "108", src: img585, alt: "Websites to sell digital products online", projectId: "project-9" },
  { id: "109", src: img586, alt: "More websites to make a lot of money online", projectId: "project-10" },
  { id: "110", src: img587, alt: "Top websites to make money online - complete list", projectId: "project-9" },
  { id: "111", src: img588, alt: "AI tools you should be using in 2026", projectId: "project-6" },
  { id: "112", src: img589, alt: "AI tools that make you unstoppable", projectId: "project-6" },
  { id: "113", src: img590, alt: "The Odin Project - open-source web development curriculum", projectId: "project-9" },
  { id: "114", src: img591, alt: "SoloLearn - mobile-first coding education platform", projectId: "project-9" },
  { id: "115", src: img592, alt: "PeaZip - free file archiver supporting 200+ formats", projectId: "project-9" },
  { id: "116", src: img593, alt: "Coursera - online learning from top universities", projectId: "project-9" },
  { id: "117", src: img594, alt: "PapersApp - reference manager with PDF annotation", projectId: "project-9" },
  { id: "118", src: img595, alt: "OpenWrt - Linux distribution for embedded devices and routers", projectId: "project-4" },
  { id: "119", src: img596, alt: "Qubes OS - security-focused operating system with virtualization", projectId: "project-4" },
  { id: "120", src: img597, alt: "Roadmap.sh - interactive developer career roadmaps", projectId: "project-9" },
  { id: "121", src: img598, alt: "Parse Platform - open-source backend for mobile and web apps", projectId: "project-9" },
  { id: "122", src: img599, alt: "Segment Anything - AI image segmentation playground", projectId: "project-6" },
  { id: "123", src: img600, alt: "Deforum Art - AI animations from text prompts with Stable Diffusion", projectId: "project-6" },
  { id: "124", src: img621, alt: "TrustedSec - penetration testing framework that installs 300+ tools automatically", projectId: "project-4" },
  { id: "125", src: img622, alt: "Jan.ai - ChatGPT alternative that runs 100% offline on your computer", projectId: "project-6" },
  { id: "126", src: img623, alt: "karpathy/llm.c - train GPT from scratch in pure C with no frameworks needed", projectId: "project-6" },
  { id: "127", src: img624, alt: "bolt.diy - AI web development with any LLM you choose", projectId: "project-6" },
  { id: "128", src: img625, alt: "opencode.ai - fastest-growing open-source coding agent competing with Claude Code", projectId: "project-6" },
  { id: "129", src: img626, alt: "Appwrite - backend platform simplifying databases, auth, and storage without boilerplate", projectId: "project-9" },
  { id: "130", src: img627, alt: "AI Hedge Fund - AI-driven quantitative finance engine with multi-agent trading strategies", projectId: "project-6" },
  { id: "131", src: img628, alt: "Seanime - anime-specific media server that understands anime naming conventions", projectId: "project-10" },
  { id: "132", src: img629, alt: "MCP Apps - official protocol for embedding custom UIs in AI chatbots", projectId: "project-6" },
  { id: "133", src: img630, alt: "pi-mono - AI agent toolkit with unified LLM API and TUI libraries", projectId: "project-6" },
  { id: "134", src: img631, alt: "Listmonk - high-performance self-hosted newsletter manager for millions of subscribers", projectId: "project-10" },
  { id: "135", src: img632, alt: "Serge.chat - self-hosted chat interface with free image generation built-in", projectId: "project-10" },
  { id: "136", src: img633, alt: "LobeHub - self-hosted ChatGPT/Claude alternative with multi-model support", projectId: "project-6" },
  { id: "137", src: img634, alt: "Screenshot to Code - turn any screenshot into clean working code with AI", projectId: "project-6" },
  { id: "138", src: img635, alt: "Continue.dev - open-source AI coding autopilot that works with any LLM", projectId: "project-6" },
  { id: "139", src: img636, alt: "UV - Python package manager 100x faster than pip with instant installs", projectId: "project-10" },
  { id: "140", src: img637, alt: "avante.nvim - AI coding assistant that edits code like Cursor inside Neovim", projectId: "project-6" },
  { id: "141", src: img638, alt: "Charm Gum - turn boring shell scripts into gorgeous interactive terminal interfaces", projectId: "project-9" },
  { id: "142", src: img639, alt: "Khoj.dev - AI research assistant that analyzes papers and creates reports with citations", projectId: "project-6" },
  { id: "143", src: img640, alt: "Owncast - self-hosted live streaming platform, your own Twitch without the ads", projectId: "project-10" },
  { id: "144", src: img661, alt: "Etymonline - comprehensive online etymology dictionary tracing word origins and history", projectId: "project-9" },
  { id: "145", src: img662, alt: "ReadCube - enhanced PDF reader with annotation, sharing, and reference management", projectId: "project-9" },
  { id: "146", src: img663, alt: "urlscan.io - sandboxed URL scanner for threat triage with network logs and IOC lists", projectId: "project-4" },
  { id: "147", src: img664, alt: "AbuseIPDB - crowdsourced IP reputation reports tracking brute-force attempts worldwide", projectId: "project-4" },
  { id: "148", src: img665, alt: "DataAnnotation.tech - get paid to train AI models via remote micro-tasks", projectId: "project-6" },
  { id: "149", src: img666, alt: "National Security Archive - 100,000+ declassified U.S. government FOIA documents", projectId: "project-9" },
  { id: "150", src: img667, alt: "FOIA.state.gov - Department of State Virtual Reading Room with 161,628 searchable documents", projectId: "project-9" },
  { id: "151", src: img668, alt: "Cryptomundo - cryptozoology news and research with field investigation reports", projectId: "project-10" },
  { id: "152", src: img669, alt: "Free Music Archive - curated library of legal audio downloads from independent artists", projectId: "project-10" },
  { id: "153", src: img670, alt: "RefMe - mobile reference management app with barcode scanning for instant citations", projectId: "project-9" },
  { id: "154", src: img671, alt: "AZLyrics - extensive lyrics archive for popular music across all genres", projectId: "project-10" },
  { id: "155", src: img672, alt: "SSRN - Social Science Research Network hosting 1 million papers across 62 disciplines", projectId: "project-9" },
  { id: "156", src: img673, alt: "ResearchGate - professional network for 25 million scientists to share papers and collaborate", projectId: "project-9" },
  { id: "157", src: img674, alt: "TruthOrFiction - fact-checking site verifying viral stories and social media claims", projectId: "project-10" },
  { id: "158", src: img675, alt: "Mendeley - free reference manager and academic social network with 100 million documents", projectId: "project-9" },
  { id: "159", src: img676, alt: "Zotero - free reference management software with browser integration for researchers", projectId: "project-9" },
  { id: "160", src: img677, alt: "Knip - detect unused JavaScript/TypeScript code, dependencies, and exports in large projects", projectId: "project-9" },
  { id: "161", src: img678, alt: "Directus - transforms SQL databases into REST/GraphQL APIs with no-code data studio", projectId: "project-9" },
  { id: "162", src: img679, alt: "ytify - privacy-focused audio streaming from YouTube with offline downloads and synced lyrics", projectId: "project-10" },
  { id: "163", src: img680, alt: "DNSDumpster - rapid DNS reconnaissance scanner mapping records and exposed subdomains", projectId: "project-4" },
  { id: "164", src: img681, alt: "BGP Toolkit by Hurricane Electric - real-time BGP announcement tracing for route leak detection", projectId: "project-4" },
  { id: "165", src: img682, alt: "IPinfo.io - trusted IP address data with ASN, carrier, and threat reputation lookups", projectId: "project-4" },
  { id: "166", src: img683, alt: "arXiv.org - preprint server hosting 2.4 million open-access scientific papers", projectId: "project-9" },
  { id: "167", src: img684, alt: "PubMed - biomedical literature database with 35 million citations from life sciences journals", projectId: "project-9" },
  { id: "168", src: img685, alt: "WorldCat - global library catalog connecting 3 billion items from 10,000 libraries worldwide", projectId: "project-9" },
  { id: "169", src: img686, alt: "DOAJ - Directory of Open Access Journals indexing 20,000 peer-reviewed journals", projectId: "project-9" },
  { id: "170", src: img687, alt: "MindMup - browser-based mind mapping with real-time collaboration and PowerPoint export", projectId: "project-9" },
  { id: "171", src: img688, alt: "JSON Crack - visualize JSON data structures as interactive node-based graphs", projectId: "project-9" },
  { id: "172", src: img689, alt: "Regex101 - interactive regular expression tester with real-time explanation and debugging", projectId: "project-9" },
  { id: "173", src: img690, alt: "Carbon - create beautiful images of source code with customizable syntax highlighting", projectId: "project-9" },
  { id: "174", src: img691, alt: "Draw.io - free diagramming tool for flowcharts, UML, and network diagrams without registration", projectId: "project-9" },
  { id: "175", src: img692, alt: "CanvyDocs - open-source Miro alternative for collaborative document editing on infinite canvas", projectId: "project-9" },
  { id: "176", src: img693, alt: "Wikiwand - modern Wikipedia interface with AI summaries and interactive timelines", projectId: "project-6" },
  { id: "177", src: img694, alt: "DevDocs - aggregated documentation for 200+ languages and frameworks in one searchable interface", projectId: "project-9" },
  { id: "178", src: img695, alt: "Ente.io - end-to-end encrypted photo and video storage as a privacy-first Google Photos alternative", projectId: "project-7" },
  { id: "179", src: img696, alt: "Calmly Writer - distraction-free writing environment with focus modes for authors and journalists", projectId: "project-9" },
  { id: "180", src: img697, alt: "Squoosh - browser-based image compression with pixel-level comparison of original vs optimized", projectId: "project-9" },
  { id: "181", src: img698, alt: "TinyWow - comprehensive suite of free file conversion tools for PDFs, images, and videos", projectId: "project-9" },
  { id: "182", src: img699, alt: "HedgeDoc - self-hosted collaborative markdown editor with real-time note-taking and diagrams", projectId: "project-9" },
  { id: "183", src: img700, alt: "Readme.so - guided README.md creator with live preview for GitHub project documentation", projectId: "project-9" },
  { id: "184", src: img701, alt: "Trakt.tv - scrobble and track media consumption across streaming services with curated lists and statistics", projectId: "project-10" },
  { id: "185", src: img702, alt: "Coolors - super fast color palette generator with image extraction and accessibility compliance checking", projectId: "project-9" },
  { id: "186", src: img703, alt: "Untools - thinking tools and mental models like Eisenhower Matrix and Systems Thinking for better decisions", projectId: "project-9" },
  { id: "187", src: img704, alt: "Neocities - free static web hosting with 1GB storage reviving the GeoCities era of personal web expression", projectId: "project-9" },
  { id: "188", src: img705, alt: "SponsorBlock - crowdsourced browser extension to auto-skip sponsor segments and intros in YouTube videos", projectId: "project-7" },
  { id: "189", src: img706, alt: "Rural Dictionary - humorous parody of Urban Dictionary with countryside-themed slang and definitions", projectId: "project-10" },
  { id: "190", src: img707, alt: "Whimsical - collaborative mind mapping, wireframing, and flowcharts with AI-powered diagram generation", projectId: "project-6" },
  { id: "191", src: img708, alt: "LeakPeek - search across breach dumps and paste-bin credentials for instant exposure alerts", projectId: "project-4" },
  { id: "192", src: img709, alt: "PDF Joiner - merge multiple PDFs or images into one file up to 2GB without watermarks or registration", projectId: "project-9" },
  { id: "193", src: img710, alt: "RetroHax - photo-heavy console-mod tutorials with RGB amp installs and 240p optimization for classic hardware", projectId: "project-10" },
  { id: "194", src: img711, alt: "AppImageHub - download single-file Linux apps that run on any distro ideal for portable USB toolkits", projectId: "project-10" },
  { id: "195", src: img712, alt: "InteriorAI - upload a room photo and receive AI redesigns in Scandinavian, modern, and minimalist styles", projectId: "project-6" },
  { id: "196", src: img713, alt: "OpenSubtitles - download subtitles in 90+ languages with hash-matching to ensure perfect sync", projectId: "project-10" },
  { id: "197", src: img714, alt: "Vectra.ai - network detection platform spotting hidden attackers in cloud and data-center traffic", projectId: "project-4" },
  { id: "198", src: img715, alt: "TMP.link - temporary file sharing with unlimited space, no speed limits, and collaborative uploads", projectId: "project-10" },
  { id: "199", src: img716, alt: "Z-Library - ebook and academic text downloads from a resilient shadow library network", projectId: "project-9" },
  { id: "200", src: img717, alt: "Anna's Archive - world's largest shadow library aggregating Library Genesis, Z-Library, and Sci-Hub", projectId: "project-9" },
  { id: "201", src: img718, alt: "CryptPad.fr - end-to-end encrypted documents, spreadsheets, and polls as a surveillance-resistant alternative", projectId: "project-7" },
  { id: "202", src: img719, alt: "Etherpad Wikimedia - real-time collaborative text editing without accounts or tracking by the Wikimedia Foundation", projectId: "project-9" },
  { id: "203", src: img720, alt: "Yewtu.be - Invidious instance for watching YouTube without ads, tracking, or a Google account", projectId: "project-7" },
  { id: "204", src: img721, alt: "Farside - auto-redirect to working privacy-friendly frontend instances for Invidious, Libreddit, and Scribe", projectId: "project-7" },
  { id: "205", src: img722, alt: "Famobi - license HTML5 games to webmasters with revenue-share embed codes and in-game ad monetization", projectId: "project-10" },
  { id: "206", src: img723, alt: "MindMeister - collaborative mind mapping with real-time brainstorming, task assignments, and presentation mode", projectId: "project-9" },
  { id: "207", src: img724, alt: "VideoScribe - create whiteboard animations by dragging images onto a canvas, exporting 1080p MP4", projectId: "project-10" },
  { id: "208", src: img725, alt: "Grasshopper - virtual business phone system with auto-attendant, extensions, and voicemail transcription", projectId: "project-10" },
  { id: "209", src: img726, alt: "Rev.com - human-verified transcripts and captions with 99% accuracy and direct export to Premiere Pro", projectId: "project-10" },
  { id: "210", src: img727, alt: "Appen - earn wages annotating AI training data via flexible micro-tasks paying weekly through PayPal", projectId: "project-6" },
  { id: "211", src: img728, alt: "Ethereal.email - developer-friendly disposable SMTP inboxes with API access for automated testing", projectId: "project-9" },
  { id: "212", src: img729, alt: "FileHorse - clean Windows software installers scanned by multiple AV engines with portable versions", projectId: "project-10" },
  { id: "213", src: img730, alt: "IndexMundi - demographic, economic, and agricultural data by country with exportable CSV charts and maps", projectId: "project-9" },
  { id: "214", src: img731, alt: "TextFree - permanent US phone number for texting and calling over Wi-Fi with voicemail transcription", projectId: "project-10" },
  { id: "215", src: img732, alt: "HomeDesign3D - sketch room layouts and furniture in 2D then view instant 3D renders for renovation planning", projectId: "project-10" },
  { id: "216", src: img733, alt: "Wisecut - AI auto-cutting long videos into short clips by removing silences and adding captions", projectId: "project-6" },
  { id: "217", src: img734, alt: "Lucidchart - diagramming org charts, network maps, and ER diagrams with real-time collaboration", projectId: "project-9" },
  { id: "218", src: img735, alt: "MajorGeeks - clean Windows utilities and drivers vetted by staff with user reviews and safe mirrors", projectId: "project-10" },
  { id: "219", src: img736, alt: "Lumen5 - convert blog articles into vertical social videos with AI storyboards and stock footage", projectId: "project-6" },
  { id: "220", src: img737, alt: "Skidrow Reloaded - scene-released PC games via torrent or direct links with installation guides", projectId: "project-10" },
  { id: "221", src: img738, alt: "OVAGames - repacked PC games with Google Drive and Mega links that resume after disconnect", projectId: "project-10" },
  { id: "222", src: img739, alt: "Mail.tm - temporary disposable email inboxes with REST API endpoints for automated verification", projectId: "project-7" },
  { id: "223", src: img740, alt: "Vyond - create business-friendly animated videos with drag-and-drop characters for training and marketing", projectId: "project-10" },
  { id: "224", src: img741, alt: "NetSpot - Wi-Fi site survey app visualizing signal heat-maps and exporting reports for access-point planning", projectId: "project-4" },
  { id: "225", src: img742, alt: "Animaker - AI-powered platform for creating animated and live-action videos with drag-and-drop characters", projectId: "project-6" },
  { id: "226", src: img743, alt: "Spotube - open-source cross-platform music streaming from YouTube with plugin-powered metadata sources", projectId: "project-7" },
  { id: "227", src: img744, alt: "Wikiless - privacy-focused Wikipedia frontend without JavaScript, ads, or IP tracking via backend proxying", projectId: "project-7" },
  { id: "228", src: img745, alt: "Piped - ad-free YouTube frontend with 4K support, SponsorBlock integration, and federated instance network", projectId: "project-7" },
  { id: "229", src: img746, alt: "Cobalt.tools - download videos, audio, and GIFs from social media without ads or trackers with zero-log policy", projectId: "project-7" },
  { id: "230", src: img747, alt: "Harmony Music - stream 100 million songs and podcasts free with no ads, no registration, and offline downloads", projectId: "project-10" },
  { id: "231", src: img748, alt: "LibRedirect - browser extension auto-redirecting YouTube, Reddit, and TikTok to privacy-friendly frontends", projectId: "project-7" },
  { id: "232", src: img749, alt: "FlexClip - stitch royalty-free footage, text, and music into vertical TikTok ads exporting 1080p watermark-free", projectId: "project-10" },
  { id: "233", src: img750, alt: "Whimsical Applet - AI-powered whiteboard for prototyping with auto-layout flowcharts and live sharing links", projectId: "project-6" },
  { id: "234", src: img751, alt: "Game Jolt - download indie games and visual novels plus join dev forums and game-jams with cash prizes", projectId: "project-10" },
  { id: "235", src: img752, alt: "LO4D - Windows shareware and freeware scanned by multiple AV engines with old-version archives available", projectId: "project-10" },
  { id: "236", src: img753, alt: "Podscribe - upload podcast episodes and receive AI-generated transcripts, summaries, and embeddable captions", projectId: "project-6" },
  { id: "237", src: img754, alt: "theScore - personalized sports news with push alerts, win-probability graphs, and fantasy-player tracking", projectId: "project-9" },
  { id: "238", src: img755, alt: "Kapwing - browser-based video editor with AI jump-cut removal, memes, and subtitling exporting 4K free", projectId: "project-6" },
  { id: "239", src: img756, alt: "FileCR - latest Windows ISOs, plug-ins, and engineering software via ad-free direct resumable links", projectId: "project-10" },
  { id: "240", src: img757, alt: "Musixmatch - synced lyrics inside Spotify, YouTube, or Apple Music with crowd-sourced translations", projectId: "project-10" },
  { id: "241", src: img758, alt: "Temp-Number - rent real SIMs from 70 countries for SMS verification codes auto-releasing after 20 minutes", projectId: "project-7" },
  { id: "242", src: img759, alt: "Pastebin.pl - dump code or configs with optional password encryption and raw URL access for quick sharing", projectId: "project-10" },
  { id: "243", src: img760, alt: "Radio.co - host professional internet radio with scheduled playlists, DJ accounts, and monetized ad injection", projectId: "project-10" },
  { id: "244", src: img781, alt: "AudioMass - browser-based audio editor for trimming, compressing, adding reverb, and exporting MP3 without software install", projectId: "project-10" },
  { id: "245", src: img782, alt: "OpenRouter.ai - unified LLM endpoint routing between 300+ models (Claude, GPT, PaLM) picking cheapest and fastest", projectId: "project-6" },
  { id: "246", src: img783, alt: "YarrList - curated directory for live sports, zero-log torrents, IPTV m3u editors, and geo-unlocked games", projectId: "project-8" },
  { id: "247", src: img784, alt: "Bandzoogle - musician website builder with built-in tour calendars, mailing lists, and zero-commission merch stores", projectId: "project-10" },
  { id: "248", src: img785, alt: "Soundcharts - music industry analytics measuring global airplay, Shazam counts, and YouTube uploads to predict breakout hits", projectId: "project-10" },
  { id: "249", src: img786, alt: "Topcoder - competitive programming platform for earning cash in contests sponsored by NASA and IBM for real-world tasks", projectId: "project-9" },
  { id: "250", src: img787, alt: "GDevelop - open-source no-code game engine for designing platformers with visual event sheets compiling to native or HTML5", projectId: "project-9" },
  { id: "251", src: img788, alt: "Cofense PhishMe - platform that creates realistic phishing emails to test employee security awareness", projectId: "project-4" },
  { id: "252", src: img789, alt: "Moosend - AI email copy generator producing newsletters, promotions, and automated marketing sequences", projectId: "project-6" },
  { id: "253", src: img790, alt: "Elicit.org - AI research assistant finding relevant papers, extracting key claims, and summarizing evidence from 125 million articles", projectId: "project-6" },
  { id: "254", src: img791, alt: "Clozemaster - language learning app using fill-in-the-blank sentences from real-world database pairs in 50+ languages", projectId: "project-9" },
  { id: "255", src: img792, alt: "CloudHiker - discover random interesting websites submitted by users one click at a time in a StumbleUpon style", projectId: "project-9" },
  { id: "256", src: img793, alt: "GitHub Advisory Database - AI-curated repository of security advisories and CVEs for open-source projects", projectId: "project-4" },
  { id: "257", src: img794, alt: "Zipify - AI landing-page builder for Shopify that predicts winning layouts and copy to increase sales", projectId: "project-6" },
  { id: "258", src: img795, alt: "Peppertype.ai - AI content generator producing blog ideas, social captions, and ad copy in 30 languages", projectId: "project-6" },
  { id: "259", src: img796, alt: "Spokeo - people-search AI compiling addresses, relatives, and social accounts from public data sources", projectId: "project-4" },
  { id: "260", src: img797, alt: "BoldMethod - free interactive quizzes on aircraft systems, weather theory, and flight-planning calculations with instant feedback", projectId: "project-9" },
  { id: "261", src: img799, alt: "DarknetStats - live revenue charts, exit-scam alerts, and uptime monitors for every major dark market", projectId: "project-4" },
  { id: "262", src: img800, alt: "GitHub Al1ex/WindowsElevation - repository of UAC bypass techniques and privilege escalation exploits with signed drivers", projectId: "project-4" },
  { id: "263", src: img801, alt: "Namify.ai - AI brand-name generator checking domain, trademark, and social handle availability across 500 extensions and 150 jurisdictions", projectId: "project-6" },
  { id: "264", src: img802, alt: "BrandMark.io - AI logo maker generating colour palettes, business-card layouts, and social-media kits from a single brand description", projectId: "project-6" },
  { id: "265", src: img803, alt: "Recall.ai - universal meeting API returning transcripts, recordings, and metadata from any video conferencing platform", projectId: "project-6" },
  { id: "266", src: img804, alt: "IdeaFlip - AI brainstorming canvas turning a problem statement into 50 sticky-note ideas with clustering and voting", projectId: "project-6" },
  { id: "267", src: img805, alt: "Figure.ai - humanoid robot powered by vision-language-action models that can assemble boxes, stock shelves, and cook meals", projectId: "project-6" },
  { id: "268", src: img806, alt: "Lulu.com - print-on-demand platform converting PDFs into perfect-bound books, spiral notebooks, and calendars for your Shopify store", projectId: "project-10" },
  { id: "269", src: img807, alt: "Preline UI - open-source headless Tailwind CSS component library with clean JS behavior, no React needed", projectId: "project-9" },
  { id: "270", src: img808, alt: "Awario - AI brand monitoring tool finding sales leads on Twitter and Reddit by matching pain keywords to your product", projectId: "project-6" },
  { id: "271", src: img809, alt: "HypeAuditor - influencer analytics platform analyzing 50 million creators for quality, demographics, and AI fraud detection", projectId: "project-6" },
  { id: "272", src: img810, alt: "UserSearch.ai - OSINT tool hunting usernames across 2,000+ platforms with timeline maps showing account creation dates", projectId: "project-4" },
  { id: "273", src: img811, alt: "Make.com - no-code automation platform visually connecting 1,400+ apps like Slack and Google Sheets into complex workflows", projectId: "project-10" },
  { id: "274", src: img812, alt: "Pluto.tv - free live TV streaming with 300+ channels, on-demand movies, and Viacom content without a subscription", projectId: "project-10" },
  { id: "275", src: img813, alt: "Keepa.com - browser extension embedding live price-history graphs inside Amazon tabs to spot fake sale prices instantly", projectId: "project-9" },
  { id: "276", src: img814, alt: "Slickdeals.net - crowdsourced discount codes and door-buster alerts so shoppers never overpay on gadgets", projectId: "project-10" },
  { id: "277", src: img815, alt: "OpenLibrary.org - borrow scanned editions of 20th-century books otherwise unavailable through controlled digital lending", projectId: "project-9" },
  { id: "278", src: img816, alt: "GeoGebra.org - interactive geometry proof builder exporting as HTML embeds for classroom tablets", projectId: "project-9" },
  { id: "279", src: img817, alt: "Sejda.com - online PDF editor for editing metadata, hyperlinks, signatures, merging, splitting, and compressing documents", projectId: "project-9" },
  { id: "280", src: img818, alt: "SmallPDF.com - shrink oversized PDFs for email compliance while keeping selectable text and vector graphics intact", projectId: "project-9" },
  { id: "281", src: img819, alt: "GloTorrents - stream torrents directly in the browser with play button and watch while downloading, no client needed", projectId: "project-8" },
  { id: "282", src: img820, alt: "TokenView.io - multi-chain crypto blockchain explorer monitoring hash rates, rich lists, and pending transactions across 120+ networks", projectId: "project-4" },
  { id: "283", src: img821, alt: "ipapi.is - IP intelligence API detecting VPNs, Tor exits, and hosting providers with pay-as-you-go pricing", projectId: "project-7" },
  { id: "284", src: img822, alt: "WiGLE.net - crowdsourced map of 1.2 billion Wi-Fi networks revealing SSID, encryption, and GPS coordinates worldwide", projectId: "project-4" },
  { id: "285", src: img823, alt: "HackTricks - searchable wiki of pentesting methodologies, CTF tips, and red-team cheat sheets", projectId: "project-4" },
  { id: "286", src: img824, alt: "PRISM Break - directory of open-source replacements for surveillance-laden tools like Google Docs and Prism", projectId: "project-4" },
  { id: "287", src: img825, alt: "Slant.co - crowdsourced pros-and-cons tables answering subjective questions like best note app for Linux", projectId: "project-9" },
  { id: "288", src: img826, alt: "ManyBooks.net - download public-domain sci-fi and mystery novels in ePub, Kindle, and plain-text formats free", projectId: "project-9" },
  { id: "289", src: img827, alt: "It's FOSS - news, tutorials, and deals about open-source software and Linux distributions", projectId: "project-9" },
  { id: "290", src: img828, alt: "Awesome-Selfhosted.com - curated Git list of 1,000+ services you can host yourself to regain data control", projectId: "project-9" },
  { id: "291", src: img829, alt: "Switching.software - ethical, federated alternatives to popular apps respecting user freedom and privacy by design", projectId: "project-7" },
  { id: "292", src: img830, alt: "StackShare.io - peek at tech stacks behind famous startups so engineers can benchmark their architecture choices", projectId: "project-9" },
  { id: "293", src: img831, alt: "Bookboon.com - free 50-page textbooks on business skills written by professors for professional development", projectId: "project-9" },
  { id: "294", src: img832, alt: "Mathigon.org - interactive math learning through timelines, virtual manipulatives, and instant feedback exercises", projectId: "project-9" },
  { id: "295", src: img833, alt: "FossMint.com - round-ups of lesser-known Linux apps, themes, AI tools, and terminal utilities", projectId: "project-6" },
  { id: "296", src: img834, alt: "Skiplagged.com - uncover hidden-city flight deals where passengers exit at layover cities to save on airfare", projectId: "project-10" },
  { id: "297", src: img835, alt: "Cronometer.com - science-backed nutrition tracker for every calorie, vitamin, and micronutrient with lab-grade analytics", projectId: "project-10" },
  { id: "298", src: img836, alt: "Skiff.org - end-to-end-encrypted documents, calendars, and cloud drives that even the hosting company cannot read", projectId: "project-7" },
  { id: "299", src: img837, alt: "Carrd.co - launch one-page responsive sites in minutes for profiles, portfolios, or link-in-bio hubs without coding", projectId: "project-9" },
  { id: "300", src: img838, alt: "Miro.com - infinite whiteboard canvases for co-creating flowcharts, user-story maps, and design thinking workshops", projectId: "project-10" },
  { id: "301", src: img839, alt: "Archive.today - create permanent snapshots of web pages preserving content even if the original site goes offline", projectId: "project-9" },
  { id: "302", src: img840, alt: "VirusTotal.com - scan files, URLs, and IP addresses with multiple antivirus engines to detect malware and phishing", projectId: "project-4" },
  { id: "303", src: img861, alt: "CryptoHack.org - free platform for learning modern cryptography by breaking real ciphers and blockchain code", projectId: "project-4" },
  { id: "304", src: img862, alt: "BuiltWith.com - reveal the full tech stack behind any live site including host, CDN, analytics, and frameworks", projectId: "project-9" },
  { id: "305", src: img863, alt: "Uptrends.com - free minute-by-minute uptime checks with waterfall charts flagging slow resources", projectId: "project-9" },
  { id: "306", src: img864, alt: "SuperCook.com - scan ingredients you already own and instantly generate thrifty recipes to minimize food waste", projectId: "project-10" },
  { id: "307", src: img865, alt: "DNSmap.io - brute-force subdomains of any target domain to reveal hidden staging sites and forgotten APIs", projectId: "project-4" },
  { id: "308", src: img866, alt: "Transform.tools - convert raw snippets between TypeScript, GraphQL, YAML, Rust, or Protobuf with one click", projectId: "project-9" },
  { id: "309", src: img867, alt: "Flow.app - map multi-step projects on a clean timeline with built-in timers tracking actual effort", projectId: "project-10" },
  { id: "310", src: img868, alt: "Webhook.site - spawn a disposable URL that logs every incoming POST or GET in real time for debugging callbacks", projectId: "project-9" },
  { id: "311", src: img869, alt: "Cybrary.it - free cybersecurity courses mapped to NICE frameworks with CPE credits and certificates", projectId: "project-4" },
  { id: "312", src: img870, alt: "Asana.com - break big initiatives into timed subtasks with timeline views and portfolio dashboards", projectId: "project-10" },
  { id: "313", src: img871, alt: "Root-me.org - practice 400+ security challenges in 30 categories with real-time flag validation", projectId: "project-4" },
  { id: "314", src: img872, alt: "Wrike.com - build dynamic request forms that auto-create tasks, balance workloads, and trigger approvals", projectId: "project-10" },
  { id: "315", src: img873, alt: "OpenProcessing.org - browse thousands of live interactive code sketches and edit generative art in-browser", projectId: "project-10" },
  { id: "316", src: img874, alt: "AtlasObscura.com - explore thousands of off-the-grid places with visitor tips and exact GPS coordinates", projectId: "project-10" },
  { id: "317", src: img875, alt: "Unclaimed.org - search official US state databases to locate forgotten refunds and dormant paychecks", projectId: "project-10" },
  { id: "318", src: img876, alt: "FutureMe.org - write emails to your future self delivered on any date you choose", projectId: "project-10" },
  { id: "319", src: img877, alt: "Sketchfab.com - explore thousands of user-uploaded 3D scans you can spin in real time", projectId: "project-10" },
  { id: "320", src: img878, alt: "Flightradar24.com - track every commercial flight in the sky live with 3D globe views and tail-number details", projectId: "project-10" },
  { id: "321", src: img879, alt: "Anthropic Claude - AI chatbot that digests entire codebases or novels in one pass without forgetting mid-conversation", projectId: "project-6" },
  { id: "322", src: img880, alt: "DiffusionBee.com - native macOS app that runs Stable Diffusion offline for local AI image generation", projectId: "project-6" },
  { id: "323", src: img881, alt: "URLVoid.com - scan URLs against blacklists to receive a safety score plus detailed threat history", projectId: "project-4" },
  { id: "324", src: img882, alt: "Wormhole.app - send end-to-end-encrypted files up to 10 GB that self-destruct after one download", projectId: "project-7" },
  { id: "325", src: img883, alt: "GetComics.org - same-day zero-watermark releases of indie and mainstream comics in downloadable CBZ archives", projectId: "project-10" },
  { id: "326", src: img884, alt: "TTSMP3.com - convert any typed script into downloadable MP3s voiced by 50+ lifelike accents", projectId: "project-10" },
  { id: "327", src: img885, alt: "OpenMHz.com - replay the last 24 hours of police, fire, and EMS radio traffic searchable by timestamp", projectId: "project-10" },
  { id: "328", src: img886, alt: "QuiltMC.net - lightweight Minecraft mod-packs built on the Quilt toolchain bypassing Forge and Fabric", projectId: "project-10" },
  { id: "329", src: img887, alt: "IPdata.co - IP geolocation and threat intelligence API for flagging malware hosts, VPNs, and bots", projectId: "project-7" },
  { id: "330", src: img888, alt: "Priyom.org - schedule and decode short-wave numbers-station broadcasts with built-in USB SDR presets", projectId: "project-4" },
  { id: "331", src: img889, alt: "LightningMaps.org - watch real-time lightning strikes populate a global map with peak current and polarity", projectId: "project-10" },
  { id: "332", src: img890, alt: "Spleeter.online - split any song into pristine STEM tracks using Deezer AI engine in the browser", projectId: "project-6" },
  { id: "333", src: img891, alt: "RetroArch.com - open-source multi-console emulator frontend with one-click core updates", projectId: "project-9" },
  { id: "334", src: img892, alt: "Soar.earth - download free Sentinel-2 and Landsat satellite imagery in 10m resolution", projectId: "project-10" },
  { id: "335", src: img893, alt: "NautilusLive.org - ride shotgun on a live ROV thousands of metres below sea level with scientist chat", projectId: "project-10" },
  { id: "336", src: img894, alt: "TempURL.cc - host text or code snippets behind URLs that expire after a single view", projectId: "project-4" },
  { id: "337", src: img895, alt: "Libgen.li - pull the freshest academic textbooks and research papers uploaded minutes ago", projectId: "project-10" },
  { id: "338", src: img897, alt: "Lindy.ai - visual workflow automation where AI agents handle email drafting, scheduling, and CRM updates", projectId: "project-6" },
  { id: "339", src: img898, alt: "FakePersonGenerator.com - mint complete synthetic identities for sandbox testing or anonymous sign-ups", projectId: "project-7" },
  { id: "340", src: img899, alt: "Soundation.com - produce studio-grade beats entirely in-browser with real-time collaboration", projectId: "project-10" },
  { id: "341", src: img900, alt: "LiveUAMap.com - real-time geotagged updates and drone footage from active conflict zones", projectId: "project-10" },
  { id: "342", src: img901, alt: "OpenCulture.com - download 1,500 free university courses, audiobooks, and language lessons from Ivy-League portals", projectId: "project-10" },
  { id: "343", src: img902, alt: "Endless.horse - scroll down an infinitely long ASCII horse whose legs never ever stop", projectId: "project-10" },
  { id: "344", src: img903, alt: "PotatoParcel.com - mail anonymous custom-message potatoes to anyone's mailbox as a vegetable postcard", projectId: "project-10" },
  { id: "345", src: img904, alt: "Itch.io - self-publish indie games, zines, or music with pay-what-you-want DRM-free marketplace", projectId: "project-10" },
  { id: "346", src: img905, alt: "SteamRip.com - pre-installed cracked PC games in compressed folders for quick download", projectId: "project-10" },
  { id: "347", src: img906, alt: "Emuparadise.me - direct-download ROMs and ISOs for every retro console ever built", projectId: "project-10" },
  { id: "348", src: img907, alt: "RestorePhotos.io - AI-upscale scratched or faded family portraits into crisp 4K with drag-and-drop", projectId: "project-6" },
  { id: "349", src: img908, alt: "Tor.taxi - check live uptime scores, scam warnings, and freshly rotated .onion addresses of darknet markets", projectId: "project-4" },
  { id: "350", src: img909, alt: "Voicery.com - synthesize eerily human AI narrations from any text with dozens of tonal accents", projectId: "project-6" },
  { id: "351", src: img910, alt: "IPTV-org.github.io - constantly updated M3U playlists of 8000+ publicly available TV channels for VLC or Kodi", projectId: "project-9" },
  { id: "352", src: img911, alt: "MentalFloss.com - amazing facts and trivia presented in an interesting and humorous way", projectId: "project-10" },
  { id: "353", src: img912, alt: "BugMeNot.com - crowdsourced usernames and passwords that unlock registration-only news sites and forums", projectId: "project-4" },
  { id: "354", src: img913, alt: "DeepAI.org - pro-grade neural style-transfer, text-to-image, and colorization APIs without sign-up", projectId: "project-10" },
  { id: "355", src: img914, alt: "WeLib.org - millions of e-books and academic texts as direct PDF downloads with no wait timer", projectId: "project-10" },
  { id: "356", src: img915, alt: "SMStoMe.com - claim a disposable phone number from 20+ countries to receive verification texts anonymously", projectId: "project-7" },
  { id: "357", src: img916, alt: "Podia.com - bundle courses, webinars, downloads, and community chats under one roof with zero transaction fees", projectId: "project-10" },
  { id: "358", src: img917, alt: "EatThisMuch.com - plan your diet on autopilot by suggesting meals based on preferences and nutritional needs", projectId: "project-10" },
  { id: "359", src: img918, alt: "TasteDive.com - recommend books, TV shows, movies, and music based on your preferences", projectId: "project-10" },
  { id: "360", src: img919, alt: "Craiyon.com - unlimited free text-to-image AI generations without sign-up", projectId: "project-6" },
  { id: "361", src: img920, alt: "Gumroad.com - sell ebooks, presets, or software directly to customers with a simple link and no monthly fee", projectId: "project-10" },
  { id: "362", src: img941, alt: "DDLBase.com - harvest fresh movie links stored on random hosts without torrent clients or seeding logs", projectId: "project-10" },
  { id: "363", src: img942, alt: "CDRomance.com - grab verified PS1, PS2, and GameCube ISOs complete with box art and tested files", projectId: "project-10" },
  { id: "364", src: img943, alt: "Bookwiz.io - AI co-writer that remembers your story universe for faster book writing and selling", projectId: "project-6" },
  { id: "365", src: img944, alt: "Skillshare.com - create and sell your own video courses for passive income from your skills", projectId: "project-10" },
  { id: "366", src: img945, alt: "GoFullPage.com - capture full-page screenshots in one click and download as PNG, JPEG, or PDF", projectId: "project-10" },
  { id: "367", src: img946, alt: "HeadshotPro.com - turn your photos into professional LinkedIn headshots with AI", projectId: "project-6" },
  { id: "368", src: img947, alt: "Whonix.org - anonymous operating system that routes all traffic through Tor for enhanced privacy", projectId: "project-7" },
  { id: "369", src: img948, alt: "GFXDownload.net - grab premium design assets like Photoshop brushes, LUTs, and vector packs", projectId: "project-10" },
  { id: "370", src: img949, alt: "SssTik.io - convert TikTok links to high-bitrate MP3 or MP4 without installing mobile apps", projectId: "project-6" },
  { id: "371", src: img950, alt: "NewPipe.net - lightweight YouTube client for Android that blocks ads with background play and downloads", projectId: "project-10" },
  { id: "372", src: img951, alt: "HearThis.at - upload DJ mixes and get plays from global audiences with no copyright strikes", projectId: "project-10" },
  { id: "373", src: img952, alt: "AuroraOSS.com - open-source alternative to Google Play Store for anonymous Android app downloads", projectId: "project-9" },
  { id: "374", src: img953, alt: "APKCombo.com - download geo-restricted APKs directly from Google servers", projectId: "project-10" },
  { id: "375", src: img954, alt: "Windscribe.com - VPN with 10 GB of free encrypted tunneling per month for privacy and security", projectId: "project-7" },
  { id: "376", src: img955, alt: "LiteAPKs.com - discover cracked APK files for Android apps and games with no ads or sign-ups", projectId: "project-10" },
  { id: "377", src: img956, alt: "WhatRuns.com - detect what technology stack any website is using including CMS, analytics, and plugins", projectId: "project-10" },
  { id: "378", src: img957, alt: "StarryNight.com - professional astronomy telescope control software for planning stargazing activities", projectId: "project-10" },
  { id: "379", src: img958, alt: "TinEye.com - reverse image search across 80 billion images to find sources and verify images", projectId: "project-10" },
  { id: "380", src: img959, alt: "Gliglish.com - practice spoken English or 40+ languages with an AI that corrects pronunciation live", projectId: "project-6" },
  { id: "381", src: img960, alt: "Cleanup.pictures - AI-powered tool to remove unwanted objects, people, or text from images in seconds", projectId: "project-6" },
  { id: "382", src: img961, alt: "Uncrate.com - window-shop premium gear from vintage motorcycles and cars to smart wallets", projectId: "project-10" },
  { id: "383", src: img962, alt: "Hipcamp.com - find the best places to camp and stargaze with guides to meteor showers and constellations", projectId: "project-6" },
  { id: "384", src: img963, alt: "WolframAlpha.com - computational knowledge engine for solving complex math problems and exploring science", projectId: "project-10" },
  { id: "385", src: img964, alt: "Archive.org - access a vast digital library of books, movies, music, and the Wayback Machine for archived websites", projectId: "project-10" },
  { id: "386", src: img965, alt: "Lingvist.com - AI-driven language learning platform with personalized paths and interactive exercises", projectId: "project-6" },
  { id: "387", src: img966, alt: "WorldTimeBuddy.com - compare and convert time zones for international travel and virtual meetings", projectId: "project-10" },
  { id: "388", src: img967, alt: "Noisli.com - mix ambient sounds to create personalized soundscapes for focus, work, and relaxation", projectId: "project-10" },
  { id: "389", src: img968, alt: "Obsidian.md - knowledge management tool for creating a second brain with interconnected notes", projectId: "project-10" },
  { id: "390", src: img969, alt: "TinyWow.com - free browser-based alternatives to Adobe Acrobat Pro and Photoshop for PDF and image editing", projectId: "project-9" },
  { id: "391", src: img970, alt: "Jenni.ai - AI-powered research assistant for writing essays, emails, and organizing research", projectId: "project-6" },
  { id: "392", src: img971, alt: "Flaticon.com - access 18M+ free vector icons and stickers in PNG, SVG, EPS, PSD, and CSS formats", projectId: "project-10" },
  { id: "393", src: img972, alt: "Zamzar.com - convert files between 1100+ formats including documents, images, videos, and audio", projectId: "project-10" },
  { id: "394", src: img973, alt: "DuckDuckGo.com - private and secure search engine that never tracks your search history", projectId: "project-7" },
  { id: "395", src: img974, alt: "ThreadReaderApp.com - unroll massive Twitter/X threads into clean blog-style articles for easy reading", projectId: "project-10" },
  { id: "396", src: img975, alt: "Nyaa.si - download anime shows and movies from a large collection for anime enthusiasts", projectId: "project-10" },
  { id: "397", src: img976, alt: "MovieMakerOnline.com - create and edit videos online without ads, sign-up, or watermarks", projectId: "project-10" },
  { id: "398", src: img977, alt: "ExplodingTopics.com - discover trending topics and micro-trends likely to go viral in the near future", projectId: "project-10" },
  { id: "399", src: img978, alt: "HathiTrust.org - access millions of digitized books from the Google Books Project in the public domain", projectId: "project-10" },
  { id: "400", src: img979, alt: "PublicDomainReview.org - explore public-domain classic films, books, and art free to use and remix", projectId: "project-10" },
  { id: "401", src: img980, alt: "NoteGPT.io - generate human-like voiceovers from text with 100+ voices or voice cloning, no sign-up needed", projectId: "project-6" },
  { id: "402", src: img981, alt: "Classics.MIT.edu - access 441 works of classical literature by 59 authors with search and commentary", projectId: "project-10" },
  { id: "403", src: img982, alt: "Looka.com - design your brand with AI-powered logo creation and comprehensive brand kit", projectId: "project-6" },
  { id: "404", src: img983, alt: "Storyset.com - free customizable illustrations and animations for websites, apps, and presentations", projectId: "project-10" },
  { id: "405", src: img984, alt: "GPTZero.me - AI detector that identifies whether text was written by a human or AI with 99% accuracy", projectId: "project-6" },
  { id: "406", src: img985, alt: "Kodi.tv - open-source media center with plugins and add-ons for streaming and organizing content", projectId: "project-9" },
  { id: "407", src: img986, alt: "OBSProject.com - free video recording and live streaming software for content creators", projectId: "project-10" },
  { id: "408", src: img987, alt: "KeepVid.com - download videos from various platforms and convert to MP4 for offline access", projectId: "project-10" },
  { id: "409", src: img988, alt: "Listonic.com - manage shopping lists and recipes with shareable lists and budget control", projectId: "project-10" },
  { id: "410", src: img989, alt: "ScrapeHero.com - enterprise-grade web scraping and data extraction service for market research", projectId: "project-10" },
  { id: "411", src: img990, alt: "Brain.fm - scientifically-backed music designed to improve focus, relaxation, and sleep", projectId: "project-10" },
  { id: "412", src: img991, alt: "Windy.com - live 4K webcams on every continent with weather maps and Aurora Borealis feeds", projectId: "project-10" },
  { id: "413", src: img992, alt: "PicoCTF.org - learn real-world hacking skills through gamified CTF challenges and leaderboards", projectId: "project-4" },
  { id: "414", src: img993, alt: "YOPmail.com - disposable email inboxes that refresh every eight days for anonymous sign-ups", projectId: "project-7" },
  { id: "415", src: img994, alt: "QuoDB.com - search millions of movie lines to find the exact scene containing any quote or phrase", projectId: "project-10" },
  { id: "416", src: img995, alt: "Remove.bg - delete photo backgrounds in five seconds and download transparent PNG automatically", projectId: "project-10" },
  { id: "417", src: img996, alt: "Untools.co - mental-model canvases and decision matrices for problem solving and systems thinking", projectId: "project-9" },
  { id: "418", src: img997, alt: "Vimm.net - download verified NTSC/PAL ROMs hash-checked against Redump for every console generation", projectId: "project-10" },
  { id: "419", src: img998, alt: "Replit.com - cloud VS Code instance with AI autocomplete, debugging, and one-click deployment", projectId: "project-6" },
  { id: "420", src: img999, alt: "AICodeConvert.com - paste Python and get instant JavaScript, Go, Rust, or C++ equivalents in one click", projectId: "project-10" },
  { id: "421", src: img1001, alt: "ChatPDF.com - upload any PDF and chat with it for summaries, citations, and formula explanations", projectId: "project-10" },
  { id: "422", src: img1002, alt: "ByteClave: d-id.com/create - turn a still selfie into a talking-head video with AI voice and script", projectId: "project-6" },
  { id: "423", src: img1003, alt: "ByteClave: elicit.org - AI research assistant that finds cited academic papers and extracts key findings", projectId: "project-6" },
  { id: "424", src: img1004, alt: "ByteClave: fireflies.ai - AI notetaker that records, transcribes, and summarizes Zoom/Teams calls", projectId: "project-6" },
  { id: "425", src: img1005, alt: "ByteClave: playcode.io - browser JavaScript playground with hot-reload and free HTTPS publishing", projectId: "project-10" },
  { id: "426", src: img1006, alt: "ByteClave: easywithai.com - discover trending AI tools and generators before they go mainstream", projectId: "project-6" },
  { id: "427", src: img1007, alt: "ByteClave: miniapps.ai - launch free in-browser AI micro-tools for content creation and productivity", projectId: "project-6" },
  { id: "428", src: img1008, alt: "ByteClave: patatap.com - turn your keyboard into an audiovisual drum kit with unique animations per key", projectId: "project-10" },
  { id: "429", src: img1009, alt: "ByteClave: longdogechallenge.com - scroll the longest single PNG of a Shiba Inu ever created", projectId: "project-10" },
  { id: "430", src: img1010, alt: "ByteClave: 3dslash.net - sculpt Minecraft-style 3D models in-browser and export STL/OBJ for 3D printing", projectId: "project-10" },
  { id: "431", src: img1011, alt: "ByteClave: 5e.tools - searchable offline D&D 5e database with every spell, monster, and item", projectId: "project-10" },
  { id: "432", src: img1012, alt: "ByteClave: steamunlocked.net - grab pre-installed Steam games via direct resumable download links", projectId: "project-10" },
  { id: "433", src: img1013, alt: "ByteClave: spotmate.online - download Spotify songs as MP3 files with a simple URL paste", projectId: "project-10" },
  { id: "434", src: img1014, alt: "ByteClave: fakewhats.com - craft realistic fake WhatsApp chat screenshots for memes or marketing mocks", projectId: "project-10" },
  { id: "435", src: img1015, alt: "ByteClave: githack.com - hot-link raw GitHub files through a free CDN with proper Content-Type headers", projectId: "project-9" },
  { id: "436", src: img1016, alt: "ByteClave: insta-stories.ru - anonymously view and download any public Instagram story without login", projectId: "project-10" },
  { id: "437", src: img1017, alt: "ByteClave: wavacity.com - full Audacity-style multi-track audio editor running entirely in the browser", projectId: "project-10" },
  { id: "438", src: img1018, alt: "ByteClave: kiwiirc.com - drop into any IRC network from the browser with no client install needed", projectId: "project-10" },
  { id: "439", src: img1019, alt: "ByteClave: metatags.io - preview and generate Twitter, Discord, and Open Graph meta tags in real time", projectId: "project-10" },
  { id: "440", src: img1020, alt: "ByteClave: losslesscut.org - slice 4K video/audio frame-perfectly without re-encoding in seconds", projectId: "project-9" },
  { id: "441", src: img1021, alt: "Remote jobs websites - 9 platforms including Remote.co, FlexJobs, Working Nomads, and Remote OK", projectId: "project-10" },
  { id: "442", src: img1022, alt: "ChatGPT vs Grok - side-by-side comparison of reasoning accuracy, coding support, and real-time X access", projectId: "project-6" },
  { id: "443", src: img1023, alt: "15 AI tools every solo founder needs - pyramid from Cursor and Perplexity to Zapier and PicWish", projectId: "project-6" },
  { id: "444", src: img1024, alt: "ByteClave: githistory.xyz - scrub any GitHub file commit timeline like a video frame-by-frame", projectId: "project-9" },
  { id: "445", src: img1025, alt: "ByteClave: iconscout.com/unicons - download 1000+ MIT-licensed icons and animated Lotties", projectId: "project-10" },
  { id: "446", src: img1026, alt: "ByteClave: lexica.art - reverse-search 10M+ Stable Diffusion images and copy their exact prompts", projectId: "project-6" },
  { id: "447", src: img1027, alt: "ByteClave: kittl.com - drag-and-drop vector T-shirt, logo, and label designer with 300 dpi export", projectId: "project-10" },
  { id: "448", src: img1028, alt: "ByteClave: pixeldrain.com - dump files up to 20 GB with permanent direct-download URLs", projectId: "project-10" },
  { id: "449", src: img1029, alt: "ByteClave: ray.so - paste code and export gorgeous syntax-highlighted 4K PNG screenshots", projectId: "project-10" },
  { id: "450", src: img1030, alt: "ByteClave: xconvert.com - bulk convert video, audio, PDF, or images with no queue limits", projectId: "project-10" },
  { id: "451", src: img1031, alt: "ByteClave: playlistsound.com - stream millions of tracks ad-free in-browser with zero sign-up", projectId: "project-10" },
  { id: "452", src: img1032, alt: "ByteClave: bilibili.tv - dive into anime, tech talks, and viral memes on China's B站 in English", projectId: "project-10" },
  { id: "453", src: img1033, alt: "ByteClave: dafont.com - download thousands of free commercial-use fonts sorted by style", projectId: "project-10" },
  { id: "454", src: img1034, alt: "ByteClave: jitsi.org - spin up free encrypted video calls with one click, no downloads or accounts", projectId: "project-7" },
  { id: "455", src: img1035, alt: "ByteClave: ezgif.com - resize, optimize, split, reverse, or add text to GIFs and WebPs online", projectId: "project-10" },
  { id: "456", src: img1036, alt: "ByteClave: musopen.org - download public domain sheet music and studio-quality classical recordings", projectId: "project-10" },
  { id: "457", src: img1037, alt: "ByteClave: janitorai.com - chat with thousands of user-made AI characters without filters", projectId: "project-6" },
  { id: "458", src: img1038, alt: "ByteClave: kaggle.com/models - grab pre-trained LLMs, diffusion, or CV models with one-click download", projectId: "project-6" },
  { id: "459", src: img1039, alt: "ByteClave: naturalreaders.com - paste text or upload a PDF and hear it read by human-like AI voices", projectId: "project-6" },
  { id: "460", src: img1040, alt: "ByteClave: similarsites.com - drop any URL and get a ranked list of look-alike alternatives", projectId: "project-10" },
  { id: "461", src: img1041, alt: "ByteClave: invidious.io - watch YouTube without Google tracking, ads, or comments via yewtu.be", projectId: "project-7" },
  { id: "462", src: img1042, alt: "ByteClave: app.grammarly.com - AI writing partner that checks clarity, tone, and plagiarism in real time", projectId: "project-6" },
  { id: "463", src: img1043, alt: "ByteClave: sflix.to - stream new movies and shows in 1080p with zero sign-up and multiple servers", projectId: "project-10" },
  { id: "464", src: img1044, alt: "ByteClave: myfridgefood.com - tick off fridge ingredients and get instant recipe ideas to cut food waste", projectId: "project-10" },
  { id: "465", src: img1045, alt: "ByteClave: html-cleaner.com - paste messy Word or exported HTML and get clean CMS-ready markup in one click", projectId: "project-10" },
  { id: "466", src: img1046, alt: "ByteClave: We.Team - one dashboard for all your cloud drives with drag-and-drop between Google, Dropbox, and FTP", projectId: "project-10" },
  { id: "467", src: img1047, alt: "Top AI tools - Pika, Udio, ElevenLabs, Luma Ray3, V0 by Anthropic, and Google Antigravity", projectId: "project-6" },
  { id: "468", src: img1048, alt: "ByteClave: ocr.space - drag scanned pages into the browser and get editable Markdown or DOCX in 40+ languages", projectId: "project-10" },
  { id: "469", src: img1049, alt: "ByteClave: printables.com - browse thousands of CC-licensed user-tested STL files for 3D printers", projectId: "project-10" },
  { id: "470", src: img1050, alt: "ByteClave: darksitefinder.com - find nearest dark-sky parks on a light-pollution map with Bortle-scale ratings", projectId: "project-10" },
  { id: "471", src: img1051, alt: "ByteClave: otrr.org - stream or download 40,000+ public-domain radio dramas from the 1930s-50s", projectId: "project-10" },
  { id: "472", src: img1052, alt: "ByteClave: freesfx.co.uk - download royalty-free foley and ambient sounds searchable by mood for videos and games", projectId: "project-10" },
  { id: "473", src: img1053, alt: "ByteClave: changenow.io - swap Bitcoin to Monero or 200+ pairs without registration at floating market rates", projectId: "project-7" },
  { id: "474", src: img1054, alt: "ByteClave: cavemaps.org - explore an interactive global map of surveyed wild caves with GPS and difficulty ratings", projectId: "project-10" },
  { id: "475", src: img1055, alt: "ByteClave: barcode.tec-it.com - generate EAN, QR, or Code-128 barcodes in vector PDF/SVG for print", projectId: "project-10" },
  { id: "476", src: img1056, alt: "AI tools you should be using in 2026 - GPT-5.2, Cursor, Gemini 3, Nano Banana, Perplexity Pro", projectId: "project-6" },
  { id: "477", src: img1057, alt: "ByteClave: apod.nasa.gov/calendar - enter your birthday and see the NASA Astronomy Picture of the Day for that date", projectId: "project-10" },
  { id: "478", src: img1058, alt: "ByteClave: covers.ai - upload any acapella and have AI voice models sing it in celebrity or character styles", projectId: "project-6" },
  { id: "479", src: img1059, alt: "ByteClave: howmanypeopleareinspacerightnow.com - live count of humans in orbit with astronaut names and mission patches", projectId: "project-10" },
  { id: "480", src: img1060, alt: "ByteClave: geoguessr.com - drop into random Google Street View and guess the country for TikTok challenges", projectId: "project-10" },
  { id: "481", src: img1061, alt: "ByteClave: ghiblify.com - upload a selfie and download a Studio Ghibli-style portrait with anime color palettes", projectId: "project-10" },
  { id: "482", src: img1062, alt: "ByteClave: file.pizza - drag a file into the browser to create a one-time peer-to-peer download link that self-destructs after transfer", projectId: "project-10" },
  { id: "483", src: img1063, alt: "ByteClave: ghosttowns.com - locate abandoned towns worldwide with history, photos and turn-by-turn driving directions", projectId: "project-10" },
  { id: "484", src: img1064, alt: "Most Used AI Tools in 2025 - comprehensive chart of top AI tools by category including automation, chatbot, code, design and video", projectId: "project-6" },
  { id: "485", src: img1065, alt: "ByteClave: 10 websites that pay you to answer surveys and research questions including Swagbucks, Prolific and YouGov", projectId: "project-10" },
  { id: "486", src: img1066, alt: "AI chatbot comparison chart featuring Perplexity, Bing Chat, Gemini, Hugging Face, Copilot, Meta AI, DeepSeek, Claude and Pi.AI", projectId: "project-6" },
  { id: "487", src: img1067, alt: "ByteClave: piskelapp.com - draw pixel-art sprites and animated GIFs layer-by-layer in the browser and export as PNG strips", projectId: "project-10" },
  { id: "488", src: img1068, alt: "ByteClave: Radio.garden - spin a 3D globe with live FM streams and click any green dot to tune into that city's station", projectId: "project-10" },
  { id: "489", src: img1069, alt: "ByteClave: crazygames.com - play thousands of WebGL and Unity browser games instantly without download or signup", projectId: "project-10" },
  { id: "490", src: img1070, alt: "ByteClave: fast.com - measure raw downstream bandwidth in seconds using Netflix servers with latency and upload stats", projectId: "project-10" },
  { id: "491", src: img1071, alt: "ByteClave: musescore.com - find, play and download over two million user-uploaded sheet-music scores with synthetic playback", projectId: "project-10" },
  { id: "492", src: img1072, alt: "ByteClave: photopea.com - open and edit PSD, AI, Sketch and RAW files in the browser with a Photoshop-style UI", projectId: "project-6" },
  { id: "493", src: img1073, alt: "ByteClave: 10fastfingers.com - test and improve typing speed through one-minute random-word races with WPM and accuracy stats", projectId: "project-10" },
  { id: "494", src: img1074, alt: "ByteClave: coverr.co - browse thousands of 4K royalty-free stock videos tagged by mood or subject, all CC0 licensed", projectId: "project-10" },
  { id: "495", src: img1075, alt: "ByteClave: Symbolab.com - enter any calculus, algebra or chemistry equation and receive step-by-step solutions with graphs", projectId: "project-10" },
  { id: "496", src: img1076, alt: "ByteClave: ytmp3.cc - convert YouTube links into tagged 320 kbps MP3 files ready for download in seconds", projectId: "project-10" },
  { id: "497", src: img1077, alt: "ByteClave: liveatc.net - click any airport on a world map and listen to real-time air-traffic-control audio feeds", projectId: "project-10" },
  { id: "498", src: img1078, alt: "ByteClave: tempmailo.com - generate disposable inboxes that forward mail for 24 hours before permanent deletion", projectId: "project-7" },
  { id: "499", src: img1079, alt: "ByteClave: palette.fm - drop any monochrome picture and receive a film-accurate colorized version in seconds without signup", projectId: "project-10" },
  { id: "500", src: img1080, alt: "ByteClave: vectr.com - create and export print-ready SVG graphics in a full-layer vector editor that runs in the browser", projectId: "project-10" },
  { id: "501", src: img1081, alt: "ByteClave: radiooooo.com - time-travel through music by clicking any decade on a world map to stream rare tracks", projectId: "project-10" },
  { id: "502", src: img1082, alt: "ByteClave: windows93.net - experience a parody 1993 OS in the browser with glitchy Paint, virtual pet and a Wolfenstein clone", projectId: "project-10" },
  { id: "503", src: img1083, alt: "ByteClave: downsub.com - extract perfectly timed SRT or VTT subtitles from any YouTube, Vimeo or Viki video in dozens of languages", projectId: "project-10" },
  { id: "504", src: img1084, alt: "ByteClave: pdfcandy.com - split, merge, compress, OCR-scan and convert PDFs to Word, Excel or JPG with 90+ free tools", projectId: "project-10" },
  { id: "505", src: img1085, alt: "ByteClave: asoftmurmur.com - mix rain, thunder, fire and white-noise sliders to create a custom ambient soundscape for study or sleep", projectId: "project-10" },
  { id: "506", src: img1086, alt: "ByteClave: wikimapia.org - explore a crowdsourced satellite map where users draw polygons over buildings and tag them with insider notes", projectId: "project-10" },
  { id: "507", src: img1087, alt: "ByteClave: downforeveryoneorjustme.com - check whether a domain is offline globally or only on your network with instant up/down verdict", projectId: "project-10" },
  { id: "508", src: img1088, alt: "AI Productivity Tools - comprehensive chart of AI tools by category including chatbots, coding, image generation, video and scheduling", projectId: "project-6" },
  { id: "509", src: img1089, alt: "ByteClave: freesound.org - search 600,000 CC-licensed sound effects and loops, filter by duration or mood, download WAV or FLAC", projectId: "project-10" },
  { id: "510", src: img1090, alt: "ByteClave: Auroraforecast.is - live KP-index map showing where and when auroras will appear tonight with cloud-cover overlay", projectId: "project-10" },
  { id: "511", src: img1091, alt: "ByteClave: Bedtimestory.ai - enter a child's name and theme and the AI crafts a unique illustrated bedtime tale exportable as PDF", projectId: "project-6" },
  { id: "512", src: img1092, alt: "ByteClave: earthquake.usgs.gov - real-time USGS feed plotting every tremor worldwide with magnitude alerts and push notifications", projectId: "project-10" },
  { id: "513", src: img1093, alt: "ByteClave: imslp.org - browse 200,000+ public-domain scores and download full orchestral parts or single-page PDFs free worldwide", projectId: "project-10" },
  { id: "514", src: img1094, alt: "ByteClave: Drumbit.app - build trap, house or hip-hop beats in-browser with classic 808/909 samples and export as WAV or MP3", projectId: "project-10" },
  { id: "515", src: img1095, alt: "ByteClave: Earth.nullschool.net - watch supercomputer data paint live wind, temperature and ocean currents on a spinning 3D globe", projectId: "project-10" },
  { id: "516", src: img1096, alt: "ByteClave: Lightningmaps.org - displays live lightning strikes across the planet updating every second with color-coded intensity", projectId: "project-10" },
  { id: "517", src: img1097, alt: "ByteClave: Autodraw.com - Google's AI watches your rough sketch and swaps it for a clean icon or illustration downloadable as SVG", projectId: "project-6" },
  { id: "518", src: img1098, alt: "ByteClave: Polyhaven.com - download CC0 3D models, HDRIs and textures curated for cinema-grade quality with no login required", projectId: "project-10" },
  { id: "519", src: img1099, alt: "ByteClave: Manualslib.com - search a database of 20,000+ PDF user guides for everything from vintage amps to modern appliances", projectId: "project-10" },
  { id: "520", src: img1100, alt: "ByteClave: Marinetraffic.com - click any blue dot on the world map to see a container ship's live speed, course and port history", projectId: "project-10" },
  { id: "521", src: img1101, alt: "ByteClave: cloudconvert.com - convert 200+ file types including video, vector, ebook and CAD up to 1 GB daily for free", projectId: "project-10" },
  { id: "522", src: img1102, alt: "ByteClave: sky-map.org - interactive star atlas that centers on your GPS coordinates and labels every object you can see tonight", projectId: "project-10" },
  { id: "523", src: img1103, alt: "ByteClave: soundraw.io - pick genre, mood and length and the AI generates an endless royalty-free track for videos or games", projectId: "project-6" },
  { id: "524", src: img1104, alt: "ByteClave: flightradar24.com - zoom to any airport and watch live ADS-B dots move in real time with speed, altitude and route info", projectId: "project-10" },
  { id: "525", src: img1105, alt: "ByteClave: convertio.co/ocr - drop a scanned PDF and get a fully editable Word doc in 40+ languages free without registration", projectId: "project-10" },
  { id: "526", src: img1106, alt: "ByteClave: Vocalremover.org - drag-and-drop any song and AI separates studio-grade instrumental and isolated vocal tracks in under a minute", projectId: "project-6" },
  { id: "527", src: img1107, alt: "ByteClave: 1337x.st - ad-light torrent index fronting fresh 4K movies, TV episodes and software with healthy seed counts", projectId: "project-8" },
  { id: "528", src: img1108, alt: "ByteClave: facecheck.id - upload a photo and it reverse-searches 50+ social networks and databases to show every public match", projectId: "project-4" },
  { id: "529", src: img1109, alt: "ByteClave: Slader.com - type your textbook ISBN and get step-by-step solutions for virtually every problem", projectId: "project-10" },
  { id: "530", src: img1110, alt: "ByteClave: Smry.ai - paste any paywalled article URL and instantly get a clean readable copy plus AI summary without ads", projectId: "project-6" },
  { id: "531", src: img1111, alt: "ByteClave: Netmirror.app - Netflix clone streaming every catalog title in 1080p with rotating CDN domains", projectId: "project-10" },
  { id: "532", src: img1112, alt: "ByteClave: Deepfakesweb.com - drag two photos and the cloud engine trains a face-swap model in 20 minutes for deepfake videos", projectId: "project-6" },
  { id: "533", src: img1113, alt: "ByteClave: Snaptik.app - paste any TikTok URL and get a clean 1080p MP4 with no watermark plus optional MP3 in seconds", projectId: "project-6" },
  { id: "534", src: img1114, alt: "ByteClave: iptv-org.github.io - fresh zero-log M3U playlist of 8,000+ live TV channels daily for VLC or any IPTV app", projectId: "project-8" },
  { id: "535", src: img1115, alt: "ByteClave: Filesearch.link - crawls open directories and forums to surface direct-download URLs that Google hides", projectId: "project-8" },
  { id: "536", src: img1116, alt: "ByteClave: 5sim.net - virtual SIM-card numbers from 180+ countries for receiving SMS verification codes instantly", projectId: "project-7" },
  { id: "537", src: img1117, alt: "ByteClave: Logoai.com - upload any corporate emblem and the AI outputs a legally distinct logo variation ready for trademark filing", projectId: "project-6" },
  { id: "538", src: img1118, alt: "ByteClave: Patentscope.wipo.int - search and download complete international patent applications from WIPO's public repository", projectId: "project-10" },
  { id: "539", src: img1119, alt: "ByteClave: Tempmailo.com - generate temporary email addresses that expire after ten minutes for quick account registrations", projectId: "project-7" },
  { id: "540", src: img1120, alt: "ByteClave: ChatX (chatx.ai) - free prompt marketplace packaging business-in-a-box scripts for GPT-4o pitch decks and forecasts", projectId: "project-6" },
  { id: "541", src: img1121, alt: "ByteClave: Sourcegraph.com/Cody - AI coding assistant that deeply understands large codebases and suggests improvements", projectId: "project-6" },
  { id: "542", src: img1122, alt: "ByteClave: Huggingface.co/models - free open-source code generation models like StarCoder2 for writing code and fixing bugs", projectId: "project-6" },
  { id: "543", src: img1123, alt: "ByteClave: Tabbyml.com - self-hosted open-source Copilot alternative with unlimited AI code completion and full privacy", projectId: "project-6" },
  { id: "544", src: img1124, alt: "ByteClave: Continue.dev - free open-source AI sidebar for VS Code to generate, refactor, and debug code", projectId: "project-6" },
  { id: "545", src: img1125, alt: "ByteClave: Codeium.com - free AI coding assistant supporting 70+ languages with VS Code and JetBrains integration", projectId: "project-6" },
  { id: "546", src: img1126, alt: "ByteClave: Buffstreams.tv - sports-stream index rebroadcasting UFC PPV, Champions League, and F1 in 1080p adaptive bitrate", projectId: "project-8" },
  { id: "547", src: img1127, alt: "ByteClave: Filepursuit.com - search engine for publicly indexed files surfacing direct Mega, MediaFire and Dropbox links", projectId: "project-8" },
  { id: "548", src: img1128, alt: "ByteClave: Patents.google.com - search every global patent filing with downloadable PDFs, technical drawings and prosecution history", projectId: "project-10" },
  { id: "549", src: img1129, alt: "ByteClave: Facebook.com/ads/library - Meta ad transparency tool showing every competitor ad, targeting regions and creative swaps", projectId: "project-6" },
  { id: "550", src: img1130, alt: "ByteClave: Spokeo.com - deep-web people engine cross-linking property records, court filings, social handles and relatives", projectId: "project-4" },
  { id: "551", src: img1131, alt: "ByteClave: LeakedBB.com - breach board where users swap scraped databases, doxx folders and zero-day game cheats", projectId: "project-8" },
  { id: "552", src: img1132, alt: "ByteClave: Cracked-games.org - ad-free pre-cracked PC repacks with direct and torrent links bypassing Steam and Epic", projectId: "project-8" },
  { id: "553", src: img1133, alt: "ByteClave: Ogomovies.tv - cycles through new TLDs daily hosting 1080p Bollywood, K-drama and Hollywood screeners", projectId: "project-8" },
  { id: "554", src: img1134, alt: "ByteClave: Exploit.in - invite-only Russian forum where CVEs, RAT builders and corporate VPN creds are auctioned", projectId: "project-7" },
  { id: "555", src: img1135, alt: "ByteClave: RARBG.to - resurrected torrent index listing 1080p/4K screeners, cracked games and day-one TV packs", projectId: "project-8" },
  { id: "556", src: img1136, alt: "ByteClave: Code & Dev AI tools chart - GitHub Copilot, TabNine, Replit AI, Cursor, Codeium, Warp and more", projectId: "project-6" },
  { id: "557", src: img1137, alt: "ByteClave: Text & Copy AI tools chart - ChatGPT, Claude, Jasper, Copy.ai, Writesonic, Grammarly and more", projectId: "project-6" },
  { id: "558", src: img1138, alt: "ByteClave: Visual & Art AI tools chart - Midjourney, Leonardo, Playground, NightCafe, RunwayML, Canva AI and more", projectId: "project-6" },
  { id: "559", src: img1139, alt: "ByteClave: Voice & Music AI tools chart - ElevenLabs, Murf, Lovo, Respeecher, Soundraw, Boomy, AIVA and more", projectId: "project-6" },
  { id: "560", src: img1140, alt: "ByteClave: Video & Avatar AI tools chart - Synthesia, HeyGen, D-ID, Elai, Pictory, Fliki, Vee.io and more", projectId: "project-6" },
  { id: "561", src: img1141, alt: "ByteClave: Data & Research AI tools chart - Perplexity, You.com, Scite, Elicit, Consensus, Semantic Scholar and more", projectId: "project-6" },
  { id: "562", src: img1142, alt: "ByteClave: Sales & CRM AI tools chart - Apollo.io, Instantly, SmartWriter, Gong, Chorus, Clari, People.ai and more", projectId: "project-6" },
  { id: "563", src: img1144, alt: "ByteClave: Productivity & Automation AI chart - Notion AI, Mem, Taskade, Motion, Reclaim, Fireflies, Otter and more", projectId: "project-6" },
  { id: "564", src: img1145, alt: "ByteClave: Niche & Fun AI tools chart - Character.ai, Replika, AITarot, ChefAI, FashionAI, InteriorAI, Roast.ai", projectId: "project-6" },
  { id: "565", src: img1146, alt: "ByteClave: PDFDrive.to - search engine hosting millions of free eBooks, academic papers and manuals as direct PDFs", projectId: "project-8" },
  { id: "566", src: img1147, alt: "ByteClave: GetIntoPC.com - daily pre-activated Windows builds, Office suites, Autodesk and Vegas Pro plug-in packs", projectId: "project-8" },
  { id: "567", src: img1148, alt: "ByteClave: HulkStream.tv - free live sports streaming for NFL, F1, boxing and cricket PPV in 4K adaptive streams", projectId: "project-8" },
  { id: "568", src: img1149, alt: "ByteClave: GenMirror.com - web proxy that cloaks your IP to watch region-locked videos and download as MP4/MP3", projectId: "project-7" },
  { id: "569", src: img1150, alt: "ByteClave: 12ft.io - strips paywalls off NYT, WSJ, Medium and 200+ news sites by fetching cached Google AMP versions", projectId: "project-7" },
  { id: "570", src: img1151, alt: "ByteClave: GetIntoPC.rest - one-click pre-activated Windows, Office, Adobe and CAD installers with no signup required", projectId: "project-8" },
  { id: "571", src: img1152, alt: "ByteClave: IGG-Games.com - direct-download page for freshly cracked PC games with bundled setup executables", projectId: "project-8" },
  { id: "572", src: img1153, alt: "ByteClave: Programs.themicrotech.net - same-day Adobe 2025, AutoCAD 2025 and Windows 11 Pro builds with silent activators", projectId: "project-8" },
  { id: "573", src: img1154, alt: "ByteClave: SkidrowReloaded.com - blog-style feed of scene releases with Rune, Goldberg and P2P magnets for AAA titles", projectId: "project-8" },
  { id: "574", src: img1155, alt: "ByteClave: Torlock-official.live - verified torrent site where every software hash is checked for Photoshop, Vegas and Office", projectId: "project-8" },
  { id: "575", src: img1156, alt: "ByteClave: RuTracker.org - Russian torrent giant with 2M+ torrents for AutoCAD RePacks, Adobe Master and pre-activated ISOs", projectId: "project-8" },
  { id: "576", src: img1157, alt: "ByteClave: FitGirl-repacks.site - selective-download repacks shrinking 40 GB games to 10 GB with cracks and MD5 checks", projectId: "project-8" },
  { id: "577", src: img1158, alt: "ByteClave: IPTorrents.com - private tracker with untouched ISOs, keygens and patches hitting minutes after release", projectId: "project-8" },
  { id: "578", src: img1160, alt: "ByteClave: Sales, Leads & Customer Support AI tools - Vapi AI, Superflows AI, Tawk.to AI, Close CRM AI", projectId: "project-6" },
  { id: "579", src: img1161, alt: "ByteClave: Content & Social Media Automation tools - OpusClip, FeedHive, Tella AI, Notion AI Templates", projectId: "project-6" },
  { id: "580", src: img1164, alt: "ByteClave: PromptBase.com - marketplace to buy and sell battle-tested GPT and Midjourney prompts for instant deployment", projectId: "project-6" },
  { id: "581", src: img1165, alt: "ByteClave: AIPRM (aiprm.com) - Chrome plugin injecting 4,000+ curated prompts directly into ChatGPT for SEO, code and sales", projectId: "project-6" },
  { id: "582", src: img1166, alt: "ByteClave: PromptHero (prompthero.com) - search engine for proven Midjourney, Stable Diffusion and DALL-E prompts", projectId: "project-6" },
  { id: "583", src: img1167, alt: "ByteClave: FlowGPT (flowgpt.com) - community-driven prompt board with jailbreak templates and prompt optimization tools", projectId: "project-6" },
  { id: "584", src: img1169, alt: "ByteClave: PromptAttack (promptattack.com) - prompt marketplace with a black-hat section for refund-policy loophole prompts", projectId: "project-6" },
  { id: "585", src: img1170, alt: "ByteClave: MegaPrompts (megaprompts.net) - bundle store reselling enterprise-level 12-page mega-prompts for offer funnels and ad copy", projectId: "project-6" },
  { id: "586", src: img1171, alt: "ByteClave: GPTraders (gptraders.io) - invite-only swap meet for million-dollar AI trading prompts with crypto analysis", projectId: "project-6" },
  { id: "587", src: img1172, alt: "ByteClave: Framedrop.ai - drop a YouTube or Twitch link and it auto-finds the best moments for Shorts, Reels and TikToks", projectId: "project-6" },
  { id: "588", src: img1173, alt: "ByteClave: TLDR.ai - paste any long YouTube URL and get a written summary plus searchable transcript instantly", projectId: "project-6" },
  { id: "589", src: img1174, alt: "ByteClave: GPT-Minus1.com - paste AI-generated text and it swaps words with human-like synonyms to bypass AI detectors", projectId: "project-6" },
  { id: "590", src: img1175, alt: "ByteClave: Video2Recipe.com - drop a cooking-video link and AI writes the full ingredient list and step-by-step recipe", projectId: "project-6" },
  { id: "591", src: img1176, alt: "ByteClave: Cutout.pro - upload a photo or video and AI erases anything you don't want, filling the hole like magic", projectId: "project-6" },
  { id: "592", src: img1177, alt: "ByteClave: Background.lol - type a weird wallpaper idea and get a free 4K AI-generated background with no watermark", projectId: "project-6" },
  { id: "593", src: img1178, alt: "ByteClave: Minimax Audio - type any sentence, pick a mood and it clones a Hollywood-grade voice as downloadable MP3", projectId: "project-6" },
];

function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const current = images[currentIndex];
  if (!current) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        onClick={onClose}
        data-testid="lightbox-overlay"
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white hover:bg-white/20"
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          data-testid="button-lightbox-close"
        >
          <X className="h-6 w-6" />
        </Button>

        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); onPrev(); }}
              data-testid="button-lightbox-prev"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={(e) => { e.stopPropagation(); onNext(); }}
              data-testid="button-lightbox-next"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </>
        )}

        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="max-w-5xl max-h-[85vh] px-16"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={current.src}
            alt={current.alt}
            className="max-h-[80vh] w-auto rounded-md object-contain"
            data-testid={`img-lightbox-${current.id}`}
          />
          <p className="text-center text-white/70 mt-3 text-sm">{current.alt}</p>
          <p className="text-center text-white/40 text-xs mt-1">
            {currentIndex + 1} / {images.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Gallery() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeProject
    ? galleryImages.filter((img) => img.projectId === activeProject)
    : galleryImages;

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };
  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const activeProjectData = galleryProjects.find((p) => p.id === activeProject);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="icon" data-testid="button-back-home">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <Images className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold">Project Gallery</span>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            <Images className="h-3 w-3 mr-1" />
            Photos & Videos
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Project Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse photos from my completed projects. Select a project category to filter, or view everything at once.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <Button
            variant={activeProject === null ? "default" : "outline"}
            onClick={() => setActiveProject(null)}
            data-testid="button-filter-all"
          >
            All Projects
          </Button>
          {galleryProjects.map((project) => (
            <Button
              key={project.id}
              variant={activeProject === project.id ? "default" : "outline"}
              onClick={() => setActiveProject(project.id)}
              data-testid={`button-filter-${project.id}`}
            >
              <FolderOpen className="h-4 w-4 mr-1.5" />
              {project.name}
            </Button>
          ))}
        </motion.div>

        {activeProjectData && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground">{activeProjectData.description}</p>
          </motion.div>
        )}

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => {
              const project = galleryProjects.find((p) => p.id === image.projectId);
              return (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card
                    className="overflow-visible cursor-pointer group hover-elevate"
                    onClick={() => openLightbox(index)}
                    data-testid={`card-gallery-${image.id}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-t-md">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        data-testid={`img-gallery-${image.id}`}
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-sm text-muted-foreground line-clamp-1">{image.alt}</p>
                      {project && (
                        <Badge variant="secondary" className="mt-2">
                          {project.name}
                        </Badge>
                      )}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <Images className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p>No photos in this category yet.</p>
          </div>
        )}
      </main>

      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
}
