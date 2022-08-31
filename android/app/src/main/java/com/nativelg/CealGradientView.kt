package com.nativelg

import android.content.Context
import android.graphics.Color
import android.graphics.drawable.GradientDrawable
import android.view.Choreographer
import android.view.View
import android.view.ViewGroup
import android.widget.LinearLayout
import com.facebook.react.bridge.ReadableArray

class CealGradientView(context: Context): LinearLayout(context){

    fun configureViews(color: ReadableArray){
        val layoutParams: ViewGroup.LayoutParams =
            LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT)
        setLayoutParams(layoutParams)


        val colorsCollection: ArrayList<Int> = ArrayList()
        for (i in 0 until color.size()) {
            colorsCollection.add(Color.parseColor(color.getString(i)))
        }
        val colors = colorsCollection.stream().mapToInt { i -> i }.toArray()
        val gradientDrawable = GradientDrawable(
            GradientDrawable.Orientation.TOP_BOTTOM,
            colors
        )
        background = gradientDrawable

    }

}
