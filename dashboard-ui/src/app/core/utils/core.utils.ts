import { TreeNode } from "primeng/api";
import { Feature } from "src/app/dashboard/property/feature.model";
import { CustomTreeNode } from "../model/custom-treeNode.model";

export class CoreUtils {

    static formatDateYYYYMMDD(date) {
        return date.substr(0,10);
    }

    static cloneObject(object) {
        return JSON.parse(JSON.stringify(object))
    }
}